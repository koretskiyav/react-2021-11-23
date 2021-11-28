import React from 'react';
import { ReactComponent as Star } from '../icons/star.svg';

export default ({ rating }) => {
  return (
    <span>
      {Array(rating)
        .fill(undefined)
        .map((ignore, index) => (
          <Star key={index} />
        ))}
    </span>
  );
};
