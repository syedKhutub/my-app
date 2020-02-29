import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component   {

    state = {
        persons:  [
            { name: 'Aqib', age: 22 },
            { name: 'Asjad', age: 23},
            { name: 'Azeez', age: 21},
            { name: 'Ehtesham', age: 12}
        ],
        showPersons: false
    }

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
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

        let persons = null;

        if(this.state.showPersons) {
            persons = (                    
                <div >
                    {this.state.persons.map((person , index) => {
                        return <Person 
                                click={() => this.deletePersonHandler(index) }
                                name={person.name} 
                                age={person.age} />
                    })}
                </div>);
        }
        return (
                <div className="App">
                    <h1> This is my first React App  </ h1>
                    <button onClick={this.togglePersonsHandler}> Switch Name </button>
                    {persons}

                </div>
                );
    }
}
export default App;
