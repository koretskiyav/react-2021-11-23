import React from 'react';
import Rate from '../rate';
import { ReactComponent as Person } from '../../icons/person.svg';
import style from './review.module.css';

export default function Review({ review }) {
  return (
    <div className={style.container}>
      <Person className={style.icon} />
      <h2 className={style.user}>{review.user}</h2>
      <p className={style.text}>{review.text}</p>
      <Rate value={review.rating} />
    </div>
  );
}
