import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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

        let persons = (<Person
                            name={this.state.persons[3].name}
                            age={this.state.persons[3].age }>He is civil engineer </Person>);

        if(this.state.showPersons) {
            persons = (                    
                <div >
                    <Person
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age}
                            click={this.switchNameHandler.bind(this,'Syed Khutub!') }/>
                    <Person
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age} >He is a student of CMRIT </Person>
                    <Person
                            name={this.state.persons[2].name}
                            age={this.state.persons[0].age }>He is sad because of KPIT and wants to put SHUTTER </Person>
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
