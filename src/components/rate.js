import classnames from 'classnames';

import stars from "../hocs/stars";

import styles from './rate.module.css';

const Rate = ({ value, stars }) => stars.map((_, index) => (
    <span key={index} className={classnames(styles.ratestar, {
        [styles.ratestaractive]: index < value,
    })} />
));

export default stars(Rate);
