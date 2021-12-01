import { ReactComponent as Star } from '../icons/star.svg';
import styles from './product.module.css';
export default function Rate({rating}) { 
  let rateStars=()=>{
    const starArray=[];
    for(var i=0;i<rating;i++){
      starArray.push(<Star key={i} className={styles.star}/>)
    }
    return starArray;
  }

  return (   
        <div>  
          <p> {rateStars()} </p>
        </div>  
  );
}