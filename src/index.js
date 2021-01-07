//Import Area
import React from 'react';
import ReactDOM from 'react-dom';

//Create a Functional Component
function MyElement(){
    //Functional Component Always return HTML (JSX)
    return <button onDoubleClick={console.log('Clicked')}>Submit</button>
}

//Function Definition
function hello(){
    alert('Hello React');
}

//Let's create an element inside a constant
const x = <button onDoubleClick={hello}>Submit</button>

ReactDOM.render(x,document.getElementById('root'));