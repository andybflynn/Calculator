export const SEND_NUMBER = 'SEND_NUMBER';
export const CHANGE_OPERATOR = 'CHANGE_OPERATOR';
export const EVALUATE = 'EVALUATE';
export const CLEAR = 'CLEAR';

export const sendNumber = (key) => {
  return {
    type: SEND_NUMBER,
    key
  }
}

export const clear = (clearType) => {
  return {
    type: CLEAR,
    clearType
  }
}

export const evaluate = () => {
  return {
    type: EVALUATE,
  }
}

export const changeOperator = (operator) => {
  return {
    type: CHANGE_OPERATOR,
    operator
  }
}