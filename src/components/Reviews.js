import Rate from './Rate';

export default function Reviews({ reviews = [] }) {
  return reviews.map(({ user, text, rating }, key) => (
    <div key={key}>
      <div>{user}</div>
      <div>{text}</div>
      <Rate value={rating} />
    </div>
  ));
}
