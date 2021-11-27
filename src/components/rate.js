import React from 'react';

import { ReactComponent as Star } from '../icons/star.svg';

export default function Rate({ value }) {
  const rateArray = new Array(value).fill(1, 0, value);

  return (
    <div>
      {rateArray.map((rate) => (
        <Star />
      ))}
    </div>
  );
}
