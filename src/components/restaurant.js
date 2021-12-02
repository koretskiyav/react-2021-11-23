import { useMemo } from 'react';
import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews'

function average(array) {
    return array.reduce((acc, next) => acc + next) / array.length;
}

export default function Restaurant({ restaurant }) {

    const averageRate = useMemo(
        () => Math.round(average(restaurant.reviews.map((review) => review.rating))),
        [restaurant]
    );

    return (
        <div>
            <p>{restaurant.name}</p>
            <Rate rating = {averageRate} />
            <hr/>
            <Menu menu={restaurant.menu} />
            <Reviews reviews={restaurant.reviews} />
        </div>
    );
}
