import * as React from 'react';
import styled from 'styled-components';
import Screen from './screen';
import Keyboard from './keyboard';
import reducer, {defaultState} from './reducer';

const Layout = styled.div`  
  font-family: Arial, Helvetica, sans-serif;
`;

export const CalculatorDispatcher = React.createContext();

const Calculator = () => {

  const [state, setState] = React.useReducer(reducer, defaultState);

  return (
    <Layout>
      <Screen screenValue={state.currentScreenValue}></Screen>
      <CalculatorDispatcher.Provider value={setState}>
        <Keyboard></Keyboard>
      </CalculatorDispatcher.Provider>
    </Layout>
  )
}

export default Calculator;