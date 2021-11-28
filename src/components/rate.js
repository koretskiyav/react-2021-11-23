import { ReactComponent as Star } from '../icons/star.svg';

export default function Rate({ value }) {
  
  const starsArray = new Array(value).fill(value, 0, value);

  return (
    <div>
      {
        starsArray.map((item) => (<Star key={Math.random()}/>))
      }
    </div>
  );
}