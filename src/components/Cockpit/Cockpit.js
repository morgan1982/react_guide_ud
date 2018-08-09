import React from 'react';
import classes from './cockpit.css';
import Aux from '../../hoc/auxiliary';

const cockpit = (props) => {


    let btnClass = classes.Btn;
    if (props.showPersons) {
        btnClass = [classes.Btn, classes.Green].join(' ');
    }

    const assignClasses = [];
    if (props.persons.length <= 2) {
      assignClasses.push(classes.red);
    };
    if (props.persons.length <= 1) {
      assignClasses.push(classes.bold); 
    };
    if(props.persons.length === 0) {
      throw new Error("einai malakia");
      
    }


    return (
      <Aux>
          <h1>Hi einai malakia?</h1>
          <p className={assignClasses.join(" ")}>einai o frogo</p>
          <button className={btnClass} onClick={props.clicked}>Switch</button>        
      </Aux>
        );
}

export default cockpit;