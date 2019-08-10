import * as React from 'react';
import styled from 'styled-components';
import {animated, useSpring} from 'react-spring';

const Screen = styled.div`
    padding: 1em .5em;
    background-color: white;
    height: 2em;
    font-size: 2em;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const Value = styled.div`
  flex: 50% 0 0;
`;

const OperatorValue = styled(animated.div)`
  font-size: 0.5em;
`;

function getVisibleOperator(operator) {
  switch (operator) {
    case '/':
      return '÷';
    case '*':
      return '×';
    default:
      return operator;
  }
}

export default ({screenValue, operatorValue, currentOperator}) => {
  const [OperatorValueProps, setOperatorValueProps] = useSpring(() => ({opacity: 0, marginTop: 15}));

  React.useEffect(() => {
    setOperatorValueProps({
      opacity: operatorValue ? 1 : 0,
      marginTop: operatorValue ? 0 : 15,
    });
  }, [operatorValue])

  return (
    <Screen>
      <Value>
        {operatorValue &&
          <OperatorValue style={OperatorValueProps}>
            {Number(operatorValue).toLocaleString()} {getVisibleOperator(currentOperator)} 
          </OperatorValue>
        || null}
      </Value>
      <Value>
        {Number(screenValue).toLocaleString()}
      </Value>
    </Screen>
  )
}