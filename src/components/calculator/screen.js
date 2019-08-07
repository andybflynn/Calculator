import * as React from 'react';

export default ({screenValue}) => {
    return <div>{Number(screenValue).toLocaleString()}</div>
}