import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

export default function Restaurant({ props }) {
  const restoRates = props.reviews.map((review) => review.rating);
  const restoRate =
    restoRates.reduce((sum, curr) => sum + Number(curr), 0) / restoRates.length;
  //console.log(restoRate);

  return (
    <div>
      <h2>
        {props.name + '   '} <Rate value={Math.round(restoRate)} />
      </h2>
      <h3>Menu</h3>
      <Menu props={props.menu} />
      <h3>Reviews</h3>
      <Reviews props={props.reviews} />
    </div>
  );
}
