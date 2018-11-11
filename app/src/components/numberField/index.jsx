import React from 'react';
import './_styles.scss';

const NumberField = props => (
    <input 
        type="number"
        name={props.name}
        id={props.id}
        className="input"
        value={props.value || ''}
        onChange={props.onChange} />
);

export default NumberField;