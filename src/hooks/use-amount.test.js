import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import useAmount from './use-amount';

Enzyme.configure({ adapter: new Adapter() });

describe('useAmount', () => {
  const setState = jest.fn();
  const initValue = 5;

  beforeEach(() => jest.resetAllMocks());
  test('should be initial amount when hook is called', () => {
    jest
      .spyOn(React, 'useState')
      .mockImplementation((initialState) => [initialState, setState]);
    expect(useAmount(initValue).amount).toBe(initValue);
  });
  test('should increase amount when increment is called', () => {
    jest
      .spyOn(React, 'useState')
      .mockImplementation((initialState) => [initialState, setState]);
    useAmount(initValue).increment();
    expect(setState).toHaveBeenCalledWith(initValue + 1);
  });
  test('should reduce amount when decrement is called', () => {
    jest
      .spyOn(React, 'useState')
      .mockImplementation((initialState) => [initialState, setState]);
    useAmount(initValue).decrement();
    expect(setState).toHaveBeenCalledWith(initValue - 1);
  });
});
