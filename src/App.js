import React from 'react';
import Content from './Content'
import Tips from './Tip';




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
<<<<<<< HEAD
            <h1> Welcome to Water You Using!</h1>
            <p >{date.toDateString()}</p>
            <Tips/>
=======
            <h1><font color = "White"> Welcome to Water You Using! </font></h1>
            <p ><font color = "White">{date.toDateString()}</font></p>
>>>>>>> b43647364e36d3abfdf50f4d5b41882dec52713d
            <Content/>
            
           </div>

  }
}

export default App;
