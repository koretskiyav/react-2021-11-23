import { useEffect } from 'react';
import { connect } from 'react-redux';
import { replace } from 'connected-react-router';

const redirectAfterSec = 5;

const Success = ({ replace }) => {
  useEffect(() => {
    setTimeout(() => {
      replace();
    }, redirectAfterSec * 1000);
  }, [replace]);
  return (
    <>
      <h2>Thanks for your order!</h2>
      <span>
        You will be redirected to restaurants after {redirectAfterSec} seconds
      </span>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  replace: () => dispatch(replace('/')),
});

export default connect(null, mapDispatchToProps)(Success);
