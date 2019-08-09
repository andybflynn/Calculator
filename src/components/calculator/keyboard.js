import * as React from 'react';
import styled from 'styled-components';
import Key, {Button} from './key';
import {sendNumber, changeOperator, evaluate, clear} from './actions';
import {CalculatorDispatcher} from './calculator';

const Keypad = styled.div`
  display: flex;
`;

const NumberPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  flex: 1 1 75%;
  background-color: #fcfcfc;

  ${Button} {
    flex: 1 1 33%;
  }
`;

const OpPanel = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 25%;
  background-color: #f0f0f0;

  ${Button} {
    font-weight: bold;
  }
`;

export default () => {
  const dispatch = React.useContext(CalculatorDispatcher);
  const [shiftMode, setShiftMode] = React.useState(false);

  function keyPressNumber(key) {
    dispatch(sendNumber(key));
  }

  function keyPressOperator(operator) {
    dispatch(changeOperator(operator));
  }

  function keyPressEvaluate() {
    dispatch(evaluate());
  }

  function keyPressClear(clearType) {
    dispatch(clear(clearType));
  }

  function evalKeyPress(e) {    
    switch (e.key) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
      case '.':
        keyPressNumber(e.key);
        break;
      case 'c':
        keyPressClear('C');
        break;
    case 'C':
        keyPressClear('AC');
        break;  
      case '/':
      case '÷':
      case '*':
      case '×':
      case '-':
      case '+':
        keyPressOperator(e.key);
        break;
      case '=':
      case 'Enter':
        keyPressEvaluate(e.key);
        break;
      case 'Shift':
        setShiftMode(false);
        break;
    }
  }

  function checkShiftHeld(e) {    
    if (e.key === 'Shift') {
      setShiftMode(true);
    }
  }

  React.useEffect(() => {
    document.addEventListener('keyup', evalKeyPress);
    return () => {
      document.removeEventListener('keyup', evalKeyPress);
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener('keydown', checkShiftHeld);
    return () => {
      document.removeEventListener('keydown', checkShiftHeld);
    }
  }, []);

  return (
    <Keypad>
      <NumberPanel>
        <Key value={'1'} action={keyPressNumber}></Key>
        <Key value={'2'} action={keyPressNumber}></Key>
        <Key value={'3'} action={keyPressNumber}></Key>
        <Key value={'4'} action={keyPressNumber}></Key>
        <Key value={'5'} action={keyPressNumber}></Key>
        <Key value={'6'} action={keyPressNumber}></Key>
        <Key value={'7'} action={keyPressNumber}></Key>
        <Key value={'8'} action={keyPressNumber}></Key>
        <Key value={'9'} action={keyPressNumber}></Key>
        <Key value={'.'} action={keyPressNumber}></Key>
        <Key value={'0'} action={keyPressNumber}></Key>
        {shiftMode ? 
          <Key value={'AC'} action={keyPressClear}></Key>
          :
          <Key value={'C'} action={keyPressClear}></Key>
        }
      </NumberPanel>
      <OpPanel>
        <Key value={'÷'} action={keyPressOperator}></Key>
        <Key value={'×'} action={keyPressOperator}></Key>
        <Key value={'-'} action={keyPressOperator}></Key>
        <Key value={'+'} action={keyPressOperator}></Key>
        <Key equals value={'='} action={keyPressEvaluate}></Key>
      </OpPanel>
    </Keypad>
  )
}