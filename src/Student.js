import React from 'react';
import './App.css';



const Student = (props) => {
    
    return (<div className="bg">
        <h1>Hello <strong>{props.name}</strong></h1>
        <h3>sum of 102 + 23 is {props.sum}</h3>
        <p>this is my image</p>
        
        <div>
            <h3>Fruits</h3>
            <ul>
               <li>Mangoes</li>
               <li>Banana</li>
                <li>Watermelon</li>
               <li>Strawberry</li> 
            </ul>
        </div>
    </div>)
}
export default Student;