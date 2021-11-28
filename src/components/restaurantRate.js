import { useEffect, useState } from 'react';

export default function RestarauntRate({reviews}) {
  const [averageRate, setAverageRate] = useState(0);

  useEffect(() => {
    const countAverageRate = () => {
      let sumRate = reviews.reduce((sum, elem) => {
        return sum + elem.rating;
      }, 0);
      return Math.round(sumRate / reviews.length);
    }

    setAverageRate(countAverageRate())
  }, [reviews])


  return (
    <>
      Average rating: <b>{averageRate}</b>
    </>
  );
}
