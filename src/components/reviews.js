import Rate from "./rate"

export default function Reviews ({reviews}) {

  let countAverage =()=>{
    var sum=0;
    for(var i=0;i<reviews.length;i++){
      sum+=reviews[i].rating;
    }
    return Math.floor(sum/reviews.length);
  }
  return (
    <div>
      <h1>Average Rating: <Rate rating={countAverage()}/> </h1>
      {reviews.map((review)=><div key={review.id}> {review.user} has posted: "{review.text}" 
      <Rate rating={review.rating}/>
       </div> )}
    </div>
    
  )
}