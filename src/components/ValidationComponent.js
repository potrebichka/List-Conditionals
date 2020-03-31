import React from 'react';

const ValidationComponent = (props) => {
    const minLength = 5;
    const output = props.textLength <= minLength ? "Text too short" : "Text too long";
    return (
    <div>
        {output}
    </div>);
}

export default ValidationComponent;