import { connect } from 'react-redux';
import {useMemo} from "react";
import BasketItem from './basketItem';
import PropTypes from "prop-types";

function Basket({ restaurants, order }) {

    const menus = useMemo(
        () => restaurants.map(({ menu }) => ( menu )).reduce((pre, cur) => pre.concat(cur)),
        [restaurants]
    );

    const products = useMemo(
        () => Object.keys(order).map(key => {
        const product = menus.find(({id}) => (id === key));
        return {
            id: key,
            name: product.name,
            count: order[key],
            sum: product.price * order[key],
        }
    }), [menus, order]);

    const total = useMemo(
        () => products.length && products.reduce((pre, cur) => pre + cur.sum, 0)
    , [products]);

    return (
        <>
            <div>
                {products.map(({id, name, count, sum}) =>
                    <div key={id}>
                        <BasketItem id={id} name={name} count={count} sum={sum}/>
                    </div>
                )}
            </div>
            <div>
                Сумма: {total}
            </div>
        </>
    );
}

Basket.propTypes = {
    restaurants: PropTypes.arrayOf(
        PropTypes.shape({
            menu: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string,
                    name: PropTypes.string,
                    price: PropTypes.number,
                }).isRequired
            ).isRequired
        }).isRequired
    ).isRequired,
    order: PropTypes.objectOf(PropTypes.number),
};

const mapStateToProps = (state) => ({
    order: state.order || 0,
});

export default connect(mapStateToProps)(Basket);
