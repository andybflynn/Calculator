import * as React from 'react';
import Key from './key';
import {sendNumber, changeOperator, evaluate, clear} from './actions';
import {CalculatorDispatcher} from './calculator';

export default () => {
  const dispatch = React.useContext(CalculatorDispatcher);

  function pressNumber(key) {
    dispatch(sendNumber(key));
  }

  function pressOperator(operator) {
    dispatch(changeOperator(operator));
  }

  function pressEvaluate() {
    dispatch(evaluate());
  }

  function pressClear(clearType) {
    dispatch(clear(clearType));
  }

    return (
      <>
        <Key value={'1'} action={pressNumber}></Key>
        <Key value={'2'} action={pressNumber}></Key>
        <Key value={'3'} action={pressNumber}></Key>
        <Key value={'4'} action={pressNumber}></Key>
        <Key value={'5'} action={pressNumber}></Key>
        <Key value={'6'} action={pressNumber}></Key>
        <Key value={'7'} action={pressNumber}></Key>
        <Key value={'8'} action={pressNumber}></Key>
        <Key value={'9'} action={pressNumber}></Key>
        <Key value={'0'} action={pressNumber}></Key>
        <Key value={'.'} action={pressNumber}></Key>
        <Key value={'+'} action={pressOperator}></Key>
        <Key value={'-'} action={pressOperator}></Key>
        <Key value={'*'} action={pressOperator}></Key>
        <Key value={'/'} action={pressOperator}></Key>
        <Key value={'='} action={pressEvaluate}></Key>
        <Key value={'C'} action={pressClear}></Key>
        <Key value={'AC'} action={pressClear}></Key>
      </>
    )
}