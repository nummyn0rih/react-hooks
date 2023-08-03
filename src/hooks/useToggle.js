import { useReducer } from 'react';

const NEXT_VALUE = 'NEXT_VALUE';
const CHANGE_VALUE = 'CHANGE_VALUE';
const CHANGE_BOOLEAN = 'CHANGE_BOOLEAN';

const reducer = ({ values, currentValue }, action) => {
  switch (action.type) {
    case NEXT_VALUE:
      const prevIndex = values.findIndex((el) => el === currentValue);
      const nextValue =
        prevIndex + 1 === values.length ? values[0] : values[prevIndex + 1];
      return {
        values,
        currentValue: nextValue,
      };
    case CHANGE_VALUE:
      const newValue =
        values.find((el) => el === action.payload) ?? currentValue;
      return {
        values,
        currentValue: newValue,
      };
    case CHANGE_BOOLEAN:
      return {
        values,
        currentValue: action.payload,
      };
    default:
      throw new Error();
  }
};

export function useToggle(initialState = [true, false]) {
  const [state, dispatch] = useReducer(reducer, {
    values: initialState,
    currentValue: initialState[0],
  });

  const toggle = (value) => {
    if (typeof value === 'boolean') {
      dispatch({
        type: CHANGE_BOOLEAN,
        payload: value,
      });
    }

    if (typeof value === 'string') {
      dispatch({
        type: CHANGE_VALUE,
        payload: value,
      });
    }

    if (value === undefined) {
      dispatch({
        type: NEXT_VALUE,
      });
    }
  };

  return [state.currentValue, toggle];
}
