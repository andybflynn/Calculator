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

  function evalKeyPress(e) {    
    const key = e.key || e;
    switch (key) {
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
        dispatch(sendNumber(key));
        break;
      case 'c':
        dispatch(clear('C'));
        break;
      case 'C':
        dispatch(clear('AC'));
        break;  
      case '/':
      case '÷':
      case '*':
      case '×':
      case '-':
      case '+':
        dispatch(changeOperator(key));
        break;
      case '=':
      case 'Enter':
        dispatch(evaluate());
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
        <Key value={'1'} action={evalKeyPress}></Key>
        <Key value={'2'} action={evalKeyPress}></Key>
        <Key value={'3'} action={evalKeyPress}></Key>
        <Key value={'4'} action={evalKeyPress}></Key>
        <Key value={'5'} action={evalKeyPress}></Key>
        <Key value={'6'} action={evalKeyPress}></Key>
        <Key value={'7'} action={evalKeyPress}></Key>
        <Key value={'8'} action={evalKeyPress}></Key>
        <Key value={'9'} action={evalKeyPress}></Key>
        <Key value={'.'} action={evalKeyPress}></Key>
        <Key value={'0'} action={evalKeyPress}></Key>
        {shiftMode ? 
          <Key value={'C'} action={evalKeyPress}></Key>
          :
          <Key value={'c'} action={evalKeyPress}></Key>
        }
      </NumberPanel>
      <OpPanel>
        <Key value={'÷'} action={evalKeyPress}></Key>
        <Key value={'×'} action={evalKeyPress}></Key>
        <Key value={'-'} action={evalKeyPress}></Key>
        <Key value={'+'} action={evalKeyPress}></Key>
        <Key equals value={'='} action={evalKeyPress}></Key>
      </OpPanel>
    </Keypad>
  )
}