import React from 'react';
import { ReactComponent as Star } from '../icons/star.svg';

export function Rate({ value }) {
  return Array.from({ length: value }, (v, k) => k).map(() => <Star />);
}
