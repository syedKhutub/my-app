import React, { Component } from 'react';
import Radium , { StyleRoot} from 'radium';
import './App.css';
import Persons from '../components/Persons/Persons'


class App extends Component   {

    state = {
        persons:  [
            { id: '1245', name: 'Aqib', age: 22 },
            { id: '1246', name: 'Asjad', age: 23},
            { id: '1247', name: 'Azeez', age: 21},
            { id: '1248', name: 'Ehtesham', age: 12}
        ],
        showPersons: false
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];  // ES6 JavaScript Alternative For slice()
        persons.splice(personIndex, 1);     //removes item from STATE persons
        this.setState({persons: persons})   //updated person STATE
    }
 
    switchNameHandler = (newName) => {
        // console.log('was clicked');
        // this.state.persons[0].name = 'Khutub'; This is wrong
        // this.state.persons[0].age = 21; This is wrong
        this.setState(  {
            persons: [
                { name: newName , age: 24 },
                { name: 'Asjad', age: 23},
                { name: 'Azeez', age: 22},
                { name: 'Ehtesham', age: 12}
                ]
            }
        )
    } 

    togglePersonsHandler = () => {
         const doesShow = this.state.showPersons;
         this.setState({showPersons: !doesShow});
    }
    
    render()  {

        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid black',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;

        if(this.state.showPersons) {
            persons = (                    
                <div >
                    <Persons persons={this.state.persons}
                        clicked={this.deletePersonHandler} />
                </div>
            );
            style.backgroundColor = 'pink';
            style[':hover'] = {
                backgroundColor: 'lightblue',
                color: 'black'
            };
        }

        const classes = [];

        if(this.state.persons.length <= 2){
            classes.push('red')
        }

        if(this.state.persons.length <= 1 ){
            classes.push('bold')
        }

        return (
            <StyleRoot>
                <div className="App">
                    <h1 className={classes.join(' ')}> This is my first React App  </ h1>
                    <button onClick={this.togglePersonsHandler} style={style}> Toggle </button>
                    {persons}

                </div>
            </StyleRoot>
                );
    }
}
export default Radium(App);
