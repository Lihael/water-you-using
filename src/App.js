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
            <h1> Welcome to Water You Using!</h1>
            <p >{date.toDateString()}</p>
            <Content/>
            
           </div>

  }
}

export default App;
