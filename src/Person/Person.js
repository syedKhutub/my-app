import React from 'react';
import './Person.css'
const person = (props) => {
    return (
        <div id="card">
                <p onClick={props.click}> This is {props.name} and  {props.age} years old.</p>
                <p>{props.children}</p>
        </div>
            )
};

export default person;
