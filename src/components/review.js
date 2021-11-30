import Rate from "./rate"

export default function Review ({user, text, rating}) {
    return (
        <div>
            <p>{user}</p>
            <p>{text}</p>
            <Rate value={rating} />
        </div>        
    )
}