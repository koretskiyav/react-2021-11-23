import Rate from './rate';

export default function Reviews({ reviews }) {
    return (
        <div>
            {reviews.map((review) => (
                <div key={review.id}>
                    <p>{review.user}</p>
                    <p>{review.text}</p>
                    <Rate rating={review.rating}/>
                </div>
            ))}

        </div>
    );
}
