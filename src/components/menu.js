import Product from './product';

export default function Menu({ props }) {
  return (
    <div>
      {props.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
