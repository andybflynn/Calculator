import * as React from 'react';
import styled from 'styled-components';

const Screen = styled.div`
    padding: 1em .5em;
    text-align: right;
    font-size: 2em;
`;

export default ({screenValue}) => {
    return <Screen>{Number(screenValue).toLocaleString()}</Screen>
}