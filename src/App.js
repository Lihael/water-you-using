import React from 'react';
import Background from '../src/watery background.jpg';

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${Background})`
};


class App extends React.Component{
  state = {}
  render(){
    const date = new Date()
    return <div className="App"> 
        <section style={ sectionStyle }>
        </section>
        <center><h1> Welcome to Water You Using!</h1>
        <p>{date.toDateString()}</p></center>
        </div>
  }
}

export default App;
