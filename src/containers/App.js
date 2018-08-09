import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Classy from '../hoc/withClass';
import Classify from '../hoc/classify';
import Aux from '../hoc/auxiliary';

class App extends Component {
  
  state = {
    persons: [
      { id: 1, name: "Max", age: 28},
      { id: 2, name: "Tom", age: 32},
      { id: 3, name: "Claire", age: 34}
    ],
    showPersons: false 
  }

  nameChangeHandler = (e) => {
    console.log(e.target.value);
    const persons = [...this.state.persons];
    persons[0].name = e.target.value;
    this.setState({
      persons
    })
  }
  showPersonsHandler = () => {
    console.log("heee")
    const visible = this.state.showPersons;
    this.setState({
      showPersons: !visible
    })
  }
  deleteHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({
      persons
    })

  }



  render() {

    let persons = null;

    if (this.state.showPersons) {
          persons = (
              <Persons persons={this.state.persons}
                       deleted={(index) => this.deleteHandler(index)}
                       changed={this.nameChangeHandler}
                        />
      )
    }


    return (
        <Aux>
        <Cockpit showPersons={this.state.showPersons}
                 persons={this.state.persons}
                 clicked={this.showPersonsHandler}
                 />
        {persons}
        </Aux>
    );
  }
}

export default Classify(App, classes.App);
