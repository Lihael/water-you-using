import React from 'react';
<<<<<<< HEAD
import Content from './Content';

=======
import Content from './Content'
>>>>>>> 1cccfe4d1dbfc0454a23272243a96d0bb87ffa35



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
            <Content />
           </div>

  }
}

export default App;
