import Star from "./star";
import styles from './rate.module.css';

export default function Rate ({value}) {
    if ((value < 1) || (value > 5)) {
        return null;
    }
    const massStars = new Array(value).fill(0);
    return (
        <ul className={styles.list}>
            {
                massStars.map((elem,i) => {
                    return <Star key={elem+i} />
                })
            }
        </ul>
    )
}