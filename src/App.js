import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component{
  render(){
    const date = new Date()
    return <div className="App"> 
            <h1> Welcome to Water You Using!</h1>
            <p>{date.toDateString()}</p>
           </div>
  }
}

export default App;
