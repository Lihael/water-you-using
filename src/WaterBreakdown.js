import React from 'react'
import {Progress, Label} from 'semantic-ui-react';
import ReactInterval from 'react-interval';
import PieChart from 'react-minimal-pie-chart';
import {VictoryPie} from 'victory';
import {VictoryBar} from 'victory';
import {Dropdown} from 'semantic-ui-react'

var request = require('request')
var data = [13,50,40,130,200,800,1000,1500,2000,5000,10000,30000,60000,50000,300000]

//Use this URL for the bar chart breakdown: http://dorm.buttersalt.me:5000/geteventdata/mitchell/testpassmitchell/DAILY_DATA_POINT
//Use this URL for the pie chart breakdown (breakdown by device): http://dorm.buttersalt.me:5000/geteventdata/mitchell/testpassmitchell/toilet/DAILY_DATA_POINT

class WaterBreakdown extends React.Component{
    componentDidMount(){
        request('http://dorm.buttersalt.me:5000/geteventdata/mitchell/testpassmitchell/SOMEDATA', function(error,response,body){
            console.log(error)
            console.log(response)
            //data = body
        })
    }
    
    state = {option: 'hourly', toilet: 35, faucet: 40, kitchen: 55}
    setTimeFrame(optionChoice) {
        var startIndex = 0;
        if(optionChoice === 'hourly'){
            startIndex = 0;
            //JSON file will return all water events in the last day
            //Therefore, this method should loop through all provided objects and 
        }
        else if(optionChoice === 'daily'){
            startIndex = 3;
        }
        else if(optionChoice === 'weekly') {
            startIndex = 6;
        }
        else if(optionChoice === 'monthly') {
            startIndex = 9;
        }
        else {
            startIndex = 12;
        }
        var toilet = data[startIndex]
        var faucet = data[startIndex + 1]
        var kitchen = data[startIndex + 2]

        this.setState({
          option: optionChoice,
          toilet: toilet,
          faucet: faucet,
          kitchen: kitchen
        })
      }

    render(){  
        return <div><br/><br/>
  <center><div class="ui teal massive label"><font color = "White">Breakdown by Device: {this.state.option}</font></div></center><br/>
        <center><div class = "ui blue large label"><Dropdown text='Time Frame Selection'>
    <Dropdown.Menu>
      <Dropdown.Item text='Past Hour' onClick = {() => this.setTimeFrame('hourly')} />
      <Dropdown.Item text='Past Day' onClick = {() => this.setTimeFrame('daily')}/>
      <Dropdown.Item text='Past Week' onClick = {() => this.setTimeFrame('weekly')}/>
      <Dropdown.Item text='Past Month' onClick = {() => this.setTimeFrame('monthly')}/>
      <Dropdown.Item text='Past Years' onClick = {() => this.setTimeFrame('yearly')}/>
    </Dropdown.Menu>
  </Dropdown> </div><br /></center>
        
          <VictoryPie
          colorScale = "cool"
         style={{ labels: { fill: "white", fontStyle: "bold"} }}
         labelRadius={({ innerRadius }) => innerRadius + 70 }
         labels={({ datum }) => `${datum.x}: ${datum.y}`}
  data={[
    { x: "Toilet", y: this.state.toilet},
    { x: "Faucet", y: this.state.faucet },
    { x: "Kitchen", y: this.state.kitchen }
  ]}
/>
<center><div class="ui teal massive label"><font color = "White">Total Breakdown: {this.state.option}</font></div></center><br />
<center><div class = "ui blue large label"><Dropdown text='Time Frame Selection'>
    <Dropdown.Menu>
      <Dropdown.Item text='Past Hour' onClick = {() => this.setTimeFrame('hourly')} />
      <Dropdown.Item text='Past Day' onClick = {() => this.setTimeFrame('daily')}/>
      <Dropdown.Item text='Past Week' onClick = {() => this.setTimeFrame('weekly')}/>
      <Dropdown.Item text='Past Month' onClick = {() => this.setTimeFrame('monthly')}/>
      <Dropdown.Item text='Past Years' onClick = {() => this.setTimeFrame('yearly')}/>
    </Dropdown.Menu>
  </Dropdown> </div><br /></center>
<VictoryBar
  barRatio = {1.5}
  data={[
    { x: "2 Days ago", y: this.state.toilet },
    { x: "Yesterday", y: this.state.faucet },
    { x: "Today", y:this.state.kitchen }
  ]}
  labels={({ datum }) => `${datum.x}: ${datum.y}`}
  style={{ labels: { fill: "white" }, data: { fill: "#ADD8E6" }}}
/>
        </div>
    }
}

export default WaterBreakdown