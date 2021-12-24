import { useContext } from 'react';
import PropTypes from 'prop-types';
import { currencyContext } from '../../contexts/currency-context';

const ConvertedValue = ({ value }) => {
  const { getConvertedValue } = useContext(currencyContext);
  return <>{getConvertedValue(value)}</>;
};

ConvertedValue.propTypes = {
  value: PropTypes.number,
};

export default ConvertedValue;
