import BasketItem from './basket-item';
import { connect } from 'react-redux';

function Basket ({ restaurants, orderMap, amount }) {

  const menu = restaurants.map((item) => item.menu).reduce((previousValue, currentValue) => previousValue.concat(currentValue))
  const newOrderMap = orderMap;
  let allSum = 0;

  const products = Object.entries(newOrderMap).filter(item => item[1] > 0).map((item) => {
    const productItems = menu.find(({ id }) => item[0] === id)
    const sum = productItems.price * item[1]
    allSum = allSum + sum
    return {
      id: item[0],
      name: productItems.name,
      amount: item[1],
      sum,
      allSum
    }
  })

  return (
    <div>
      {products.map((item) => (
        <BasketItem key={item.id} id={item.id} name={item.name} amount={item.amount} summ={item.sum}/>
      ))}
      <p>Общая сумма заказа: {allSum}</p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  orderMap: state.order
})

export default connect(mapStateToProps)(Basket)