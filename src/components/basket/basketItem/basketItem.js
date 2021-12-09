import { memo } from 'react'
import { connect } from 'react-redux';
import {decrement, increment, deleteProduct} from "../../../redux/actions";
import Button from "../../button";
import PropTypes from "prop-types";


function BasketItem({ id, name, count, sum, decrement, increment, deleteProduct }) {
    return (
        <span>
            {id}{' '}
            {name}{' '}
            {count}{' '}
            {sum}
            <Button
                onClick={decrement}
                icon="minus"
            />
            <Button
                onClick={increment}
                icon="plus"
            />
            <Button
                onClick={deleteProduct}
                icon="minus"
            />
        </span>
    );
}

BasketItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    count: PropTypes.number,
    sum: PropTypes.number,
    decrement: PropTypes.func,
    increment: PropTypes.func,
    deleteProduct: PropTypes.func,
}

const mapDispatchToProps = (dispatch, props) => ({
    decrement: () => dispatch(decrement(props.id)),
    increment: () => dispatch(increment(props.id)),
    deleteProduct: () => dispatch(deleteProduct(props.id)),
});

export default connect(null, mapDispatchToProps)(memo(BasketItem));
