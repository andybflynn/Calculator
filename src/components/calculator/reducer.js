import {SEND_NUMBER, CHANGE_OPERATOR, EVALUATE, CLEAR} from './actions';

export const defaultState = {
  currentScreenValue: '',
  operatorValue: 0,
  operator: null,
  operatorModeActive: false,
}

const evaluate = (state) => {
  if (!state.operator) return state;
  let currentVal = state.currentScreenValue || 0;
  switch (state.operator) {
    case '+':
      currentVal = (state.operatorValue + parseFloat(currentVal)).toString();
      break;      
    case '-':
      currentVal = (state.operatorValue - parseFloat(currentVal)).toString();
      break;
    case '÷':
    case '/':
      currentVal = (state.operatorValue / parseFloat(currentVal)).toString();
      break;
    case '×':
    case '*':
      currentVal = (state.operatorValue * parseFloat(currentVal)).toString();
      break;
    }
    return {
      ...state,
      currentScreenValue: currentVal,
      operatorValue: 0,
    }
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEND_NUMBER:
      if (state.operatorModeActive) {
        return {...state, currentScreenValue: action.key, operatorValue: parseFloat(state.currentScreenValue), operatorModeActive: false}
      }
      if (state.currentScreenValue.length < 10) {
        return {...state, currentScreenValue: state.currentScreenValue + action.key}
      }
      return state;
    case CHANGE_OPERATOR:
      // if an operator is already queued up, evaluate before adding the next one
      if (state.operator) {
        return {...evaluate(state), operator: action.operator, operatorModeActive: true};
      }
      return {...state, operator: action.operator, operatorModeActive: true}
    case EVALUATE:
      return {...evaluate(state), operator: null, operatorModeActive: false};
    case CLEAR:
      if (action.clearType === 'AC') {        
        return defaultState
      }
      return {...state, currentScreenValue: ''}
    default:
      return state;
  }
}

export default reducer;