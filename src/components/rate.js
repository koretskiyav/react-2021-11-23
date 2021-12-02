import '../assets/css/rate.css';

export default function Rate({ value }) {

  const defaultRateList = [0, 0, 0, 0, 0]
  let rateGrade = 0;

  if(0 < value && value < 6){
    rateGrade = value
  }

  for (let i = 0; i < rateGrade; i++) {
    defaultRateList[i] = 1
  }

  return (
    <ul className="rate">
      {defaultRateList.map((item, i) => {
        if(item) {
          return <li key={i} className="rate__item rate__item-filled">&#9733;</li>
        } else {
          return <li key={i} className="rate__item" >&#9734;</li>
        }
      })}
    </ul>
  );
}
