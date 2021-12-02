import React from 'react';
import  {ReactComponent as Star}  from '../icons/star.svg';

export default function Rate({value}) {
  let stars = Array.from(Array(value), (_, i) => i+1)
 
  return (
    <div style = {{display: 'flex'}}>
      {stars.map((star) => {
        return <div key={star} style = {{width: '15px', height: '15px' }}>{<Star/>}</div>
      })}
    </div>
  )
}
