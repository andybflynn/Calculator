import * as React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  padding: 2em;
  background-color: ${props => props.equals ? 'gold' : 'transparent'};
  border: 0;
  font-size: 1em;
`;

export default ({value, action, ...props}) => {  
  return <Button {...props} onClick={() => action(value)}>{value}</Button>
}