import { ReactComponent as Star } from '../icons/star.svg';

export default function Rate({ value }) {
  const fillStarColor = '#ffa500';
  const blankStarColor = 'gray';
  const getColor = (starNumber) =>
    starNumber >= value ? blankStarColor : fillStarColor;

  return Array.from({ length: 5 }, (v, k) => (
    <Star key={k} fill={getColor(k)} />
  ));
}
