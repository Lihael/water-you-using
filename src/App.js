import React from 'react';
import Content from './Content'
import Tips from './Tip';
import {Button} from 'semantic-ui-react'




class App extends React.Component{
  state = {page: 'TotalWater'}
  setButton(pageSet) {
    this.setState({page: pageSet})
  }
  render(){
    const date = new Date()
    
    return <div className="App" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
  }}> 
            <h1><font color = "White">Welcome to Water You Using!</font></h1>
            <p ><font color = "White">{date.toDateString()}</font></p>
            
            <Tips/>
            <div className = "buttons" style = {{display:'flex', flexDirection: 'row'}}>
              <Button primary onClick={() => this.totalButton('WaterBreakdown')}>Water Breakdown</Button>
              <Button secondary onClick={() => this.totalButton('TotalWater')}>Total Water</Button>
            </div>
            <Content name = {this.state.page} />
            
           </div>

  }
}

export default App;
