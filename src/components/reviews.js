import Review from "./review";

export default function Reviews ({reviews}) {
    return (
        <div>
            {reviews.map((review) => {
                return (
                    <Review key={review.id} user={review.user} text={review.text} rating={review.rating} />                    
                )             
            })}
        </div>
    )
}