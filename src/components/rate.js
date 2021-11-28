import React from 'react';
import { ReactComponent as Star } from '../icons/star.svg';

export default ({ rating }) => {
  return <div>{Array(rating).fill(<Star />)}</div>;
};
