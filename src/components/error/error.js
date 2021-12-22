import { errorReasonSelector } from '../../redux/selectors';
import { connect } from 'react-redux';

const Error = ({ reason }) => {
  return (
    <>
      <h2>Ooops!</h2>
      <span>{reason}</span>
    </>
  );
};

const mapStateToProps = (state) => ({
  reason: errorReasonSelector(state),
});

export default connect(mapStateToProps)(Error);
