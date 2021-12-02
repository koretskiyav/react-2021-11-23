import React, { Component } from 'react';
//import { restaurants } from '../fixtures';
import Menu from './menu';
import Reviews from './Reviews';
import Rate from './Rate'

class Restaurant extends Component {
  render() {
    let activeRestaurant = this.props.restaurant;
    let revs = activeRestaurant.reviews;
    let rating = 0;
    for (let i = 0; i < revs.length; i++) {
     rating += revs[i].rating;
    }
    let value = Math.floor(rating / revs.length);
    
  
    return (
      <div>
        <h3>{activeRestaurant.name} daily menu  {<Rate value = {value}/>}</h3>
        
        <Menu menu = {activeRestaurant.menu}/>
        <Reviews  reviews = {activeRestaurant.reviews}/>    
      </div>
    )
  }
}

export default Restaurant
