import React from 'react';
import { ReactComponent as Star } from '../icons/star.svg';

export default ({ rating }) => {
  return (
    <span>
      {[...Array(rating).keys()].map((key) => (
        <Star key={key} />
      ))}
    </span>
  );
};
