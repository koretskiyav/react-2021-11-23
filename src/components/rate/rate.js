import cn from 'classnames';
import PropTypes from 'prop-types';

import { ReactComponent as Star } from '../../icons/star.svg';

import styles from './rate.module.css';

const Rate = ({ value }) => (
  <div >
    {[...Array(5)].map((_, i) => (
      <Star
        data-id="review-rating"
        key={i}
        className={cn(styles.star, { [styles.checked]: i <= value - 1 })}
      />
    ))}
  </div>
);

Rate.propTypes = {
  value: PropTypes.number.isRequired
};

export default Rate;
