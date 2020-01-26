import React from 'react';
import Content from './Content'
import Tips from './Tip';
import {Button} from 'semantic-ui-react'



class App extends React.Component{
  state = {page: 'TotalWater', waterTime: "19:20",waterVolume: 100}
  setButton(pageSet) {
    this.setState({
      ...this.state,
      page: pageSet,
    })
  }
  render(){
    const date = new Date()
    //get last water text info
    var lastWater
    var lastWaterText
    var http_req = new XMLHttpRequest();
        http_req.open("GET",'http://dorm.buttersalt.me:5000/getlastevent/mitchell/testpassmitchell',false);
        http_req.send(null);
        lastWater = JSON.parse(http_req.responseText)
        lastWaterText = lastWater[0].text
    
        

        
    
    return <div className="App" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
  }}> 
            <h1><font color = "White">Water You Using?</font></h1>
            <p ><font color = "White">{date.toDateString()}</font></p>
            
            <Tips/>
            <div className = "buttons" style = {{display:'flex', flexDirection: 'row'}}>
              <Button secondary onClick={() => this.setButton('WaterBreakdown')}> Water Breakdown</Button>
              <Button primary onClick={() => this.setButton('TotalWater')}> Total Water</Button>
              <Button secondary onClick={() => this.setButton('WaterTimeline')}> Water Timeline</Button>
            </div>
            <Content page = {this.state.page} />
            <p><center><font color = "White">{lastWaterText}</font></center></p>
           </div>

  }
}

export default App;
