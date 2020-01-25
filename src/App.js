import React from 'react';
import Content from './Content'




class App extends React.Component{
  state = {}
  render(){
    const date = new Date()
    return <div className="App" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
  }}> 
            <h1><font color = "White"> Welcome to Water You Using! </font></h1>
            <p ><font color = "White">{date.toDateString()}</font></p>
            <Content/>
            
           </div>

  }
}

export default App;
