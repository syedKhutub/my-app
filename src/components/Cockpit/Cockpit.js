import React from 'react';
const cockpit = (props) => {
    const classes = [];

    if(props.persons.length <= 2){
        classes.push('red')
    }

    if(props.state.persons.length <= 1 ){
        classes.push('bold')
    }
    return(
        <div>
        <h1 className={classes.join(' ')}> This is my first React App  </ h1>
        <button onClick={this.togglePersonsHandler} style={style}> Toggle </button>
        </div>
    )
};

export default cockpit;