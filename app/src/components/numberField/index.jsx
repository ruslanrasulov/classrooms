import React from 'react';
import './_styles.scss';

export default props => (
    <input 
        type="number"
        name={props.name}
        id={props.id}
        className="input"
        value={props.value}
        defaultValue="" 
        onChange={props.onChange} />
);