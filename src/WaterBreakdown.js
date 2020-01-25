import React from 'react'
import {Progress, Label} from 'semantic-ui-react';
import ReactInterval from 'react-interval';
import PieChart from 'react-minimal-pie-chart';
import {VictoryPie} from 'victory';
import {VictoryBar} from 'victory';
import {Dropdown} from 'semantic-ui-react'

var request = require('request')
var hourlyJSON = null
var dailyJSON = null
var weeklyJSON = null
var monthlyJSON = null
var yearlyJSON = null
var data = [13,30,40,300,500,900,2000,5000,6000,]

class WaterBreakdown extends React.Component{
    componentDidMount(){
        request('http://dorm.buttersalt.me:5000/geteventdata/mitchell/testpassmitchell/DAILY_DATA_POINT', function(error,response,body){
            console.log(error)
            console.log(response)
            dailyJSON = body
        })
        request('http://dorm.buttersalt.me:5000/geteventdata/mitchell/testpassmitchell/HOURLY_DATA_POINT', function(error,response,body){
            console.log(error)
            console.log(response)
            hourlyJSON = body
        })
        request('http://dorm.buttersalt.me:5000/geteventdata/mitchell/testpassmitchell/WEEKLY_DATA_POINT', function(error,response,body){
            console.log(error)
            console.log(response)
            weeklyJSON = body
        })
        request('http://dorm.buttersalt.me:5000/geteventdata/mitchell/testpassmitchell/MONTHLY_DATA_POINT', function(error,response,body){
            console.log(error)
            console.log(response)
            monthlyJSON = body
        })
        request('http://dorm.buttersalt.me:5000/geteventdata/mitchell/testpassmitchell/YEARLY_DATA_POINT', function(error,response,body){
            console.log(error)
            console.log(response)
            yearlyJSON = body
        })
    }
    
    state = {option: 'hourly', toilet: 35, faucet: 40, kitchen: 55}
    setTimeFrame(optionChoice) {
        this.setState({
          option: optionChoice
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