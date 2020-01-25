import React from 'react';
import Content from './Content.js';


class App extends React.Component{
  state = {}
  render(){
    const date = new Date()
    return <div className="App"> 
            <h1> Welcome to Water You Using!</h1>
            <p>{date.toDateString()}</p>
            <Content />
           </div>
  }
}

export default App;
