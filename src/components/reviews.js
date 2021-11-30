import Review from "./review";

export default function Reviews ({reviews}) {
    return (
        <div>
            {reviews.map((review) => {
                console.log(review.user)
                return (
                    <div>
                        <Review key={review.id} user={review.user} text={review.text} rating={review.rating} />
                    </div>  
                )             
            })}
        </div>
    )
}