import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button`

`;

export default ({value, action}) => {
  return <Button onClick={() => action(value)}>{value}</Button>
}