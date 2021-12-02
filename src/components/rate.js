import { ReactComponent as Star } from '../icons/star.svg';

function Rate({ rating }) {

    let stars = [];

    for (let i = 0; i < rating; i++) {
        stars.push(<Star key={i}/>);
    }

    return (
        <div>
            {stars}
        </div>
    );
}

export default Rate;
