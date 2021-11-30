import React from 'react';
import { ReactComponent as Star } from '../icons/star.svg';

export default function Rate({ value }) {
  let arr = new Array(value).fill(1);
  return (
    <div>
      {arr.map((el) => (
        <span>{(el = <Star />)}</span>
      ))}
    </div>
  );
}
