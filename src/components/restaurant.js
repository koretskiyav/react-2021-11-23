import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

export default function Restaurant ({menu, reviews}) {
    let initialValue = 0;
    let sumRating = reviews.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.rating;
    }, initialValue);
    let average = Math.round(sumRating/reviews.length);
    return (
        <div>
            <Rate value={average} /> 
            <Menu menu={menu} />
            <Reviews reviews={reviews} /> 
        </div>
    )
    
}