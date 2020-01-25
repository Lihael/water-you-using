import React from 'react'
import {Progress, Label} from 'semantic-ui-react';
import ReactInterval from 'react-interval';
import PieChart from 'react-minimal-pie-chart';
import {VictoryPie} from 'victory';
import {VictoryBar} from 'victory';
import {Dropdown} from 'semantic-ui-react'

var request = require('request')
//var data = [13,50,40,130,200,800,1000,1500,2000,5000,10000,30000,60000,50000,300000]

//Use this URL for the bar chart breakdown: http://dorm.buttersalt.me:5000/geteventdata/mitchell/testpassmitchell/DAILY_DATA_POINT
//Use this URL for the pie chart breakdown (breakdown by device): http://dorm.buttersalt.me:5000/geteventdata/mitchell/testpassmitchell/toilet/DAILY_DATA_POINT

class WaterBreakdown extends React.Component{
    componentDidMount(){
        this.setTimeFrame('hourly')
    }
    
    state = {option: 'hourly', toilet: 35, faucet: 40, kitchen: 55}
    setTimeFrame(optionChoice) {
        
        var timeIndex = 0;
        var kitchenData = [0.0,1.0,2.0,3.0,4.0]
        var toiletData = [0.0,1.0,2.0,3.0,4.0]
        var faucetData = [0.0,1.0,2.0,3.0,4.0]
        var json1 = []
        var json2 = []
        var json3 = []
        request('http://dorm.buttersalt.me:5000/lasttimevolume/mitchell/testpassmitchell/kitchen', function(error,response,body){
            console.log(error)
            console.log(response)
            json1 = JSON.parse(body);
            console.log("KitchenData1 inside: " + kitchenData[1])
        })
        kitchenData[0] = parseFloat(json1[0].hour)
        kitchenData[1] = parseFloat(json1[0].day)
        kitchenData[2] = parseFloat(json1[0].week)
        kitchenData[3] = parseFloat(json1[0].month)
        kitchenData[4] = parseFloat(json1[0].year)
        console.log(kitchenData)
        console.log("KitchenData1 outside: " + kitchenData[1]);
        request('http://dorm.buttersalt.me:5000/lasttimevolume/mitchell/testpassmitchell/bathroom', function(error,response,body){
            console.log(error)
            console.log(response)
            json2 = JSON.parse(body);
            
        })
        toiletData[0] = parseFloat(json2[0].hour)
        toiletData[1] = parseFloat(json2[0].day)
        toiletData[2] = parseFloat(json2[0].week)
        toiletData[3] = parseFloat(json2[0].month)
        toiletData[4] = parseFloat(json2[0].year)
        request('http://dorm.buttersalt.me:5000/lasttimevolume/mitchell/testpassmitchell/faucet', function(error,response,body){
            console.log(error)
            console.log(response) 
            json3 = JSON.parse(body);   
            
        })
        faucetData[0] = parseFloat(json3[0].hour)
        faucetData[1] = parseFloat(json3[0].day)
        faucetData[2] = parseFloat(json3[0].week)
        faucetData[3] = parseFloat(json3[0].month)
        faucetData[4] = parseFloat(json3[0].year)
        if(optionChoice === 'hourly'){
            timeIndex = 0;
        }
            //JSON file will return all water events in the last day
            //Therefore, this method should loop through all provided objects and 
        
        else if(optionChoice === 'daily'){
            timeIndex = 1;
        }
        else if(optionChoice === 'weekly') {
            timeIndex = 2
        }
        else if(optionChoice === 'monthly') {
            timeIndex = 3
        }
        else {
            timeIndex = 4
        }
        this.setState({
          option: optionChoice,
          toilet: toiletData[timeIndex],
          faucet: faucetData[timeIndex],
          kitchen: kitchenData[timeIndex]
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
    { x: "Toilet", y: this.state.toilet },
    { x: "Faucet", y: this.state.faucet },
    { x: "Kitchen", y:this.state.kitchen }
  ]}
  labels={({ datum }) => `${datum.x}: ${datum.y}`}
  style={{ labels: { fill: "white" }, data: { fill: "#ADD8E6" }}}
/>
        </div>
    }
}

export default WaterBreakdown