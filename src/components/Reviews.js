import React, { Component } from 'react';
import styles from './Reviews.module.css';
import Rate from './Rate';

 class Reviews extends Component {

  render() {
    let {reviews} = this.props;

   return (
    <div className = {styles.reviewDiv}>
      {reviews.map((review) => {
        return  <div className = {styles.reviewCard}>
                 <h4>{review.user}</h4>
                 <p>{review.text}</p>
                 <Rate value = {review.rating}/>
                </div>
        
      })}
    </div>
   )
  }
}

export default Reviews;
