import React from 'react';
import Radium from 'radium';
import './Person.css'
const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div id="card" style={style}>
                <p onClick={props.click}> This is {props.name} and  {props.age} years old.</p>
                <p>{props.children}</p>
        </div>
            )
};

export default Radium(person);
