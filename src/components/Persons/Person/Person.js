import React from 'react';
import classes from './person.css';
import Aux from '../../../hoc/auxiliary';
import Classify from '../../../hoc/classify';

const person = (props) => {
    return (
        <Aux>
            <input type="text"
                   onChange={props.changed}
                   value={props.name}/>
            <ul>
                <li>Main</li>
                <li>max</li>
                <li>blax</li>
                <li>about</li> 
            </ul>
            <button onClick={() => props.handleAge("50")}>chnage age</button>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <button onClick={props.deleteHandler}>delete</button>
            {props.children}
        </Aux>
        )
}



export default Classify(person, classes.Person);