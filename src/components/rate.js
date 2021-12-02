import { ReactComponent as Star } from '../icons/star.svg';

export default function Rate({ value }) {
  return [...Array(value)].map(() => <Star />);
}
