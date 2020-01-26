import React from 'react'
import {VictoryChart, VictoryLine} from 'victory'
import {Dropdown} from 'semantic-ui-react'

var request = require('request')
var hourlyJSON = null
var dailyJSON = null


//http://dorm.buttersalt.me:5000/lasttimevolume/mitchell/testpassmitchell/bathroom
//Returns a float with the water usage in the last hour for "bathroom"


class WaterTimeline extends React.Component {
    state = {option: 'hourly'}
    setTimeFrame(optionChoice) {
        this.setState({
        //...this.state,
        option: optionChoice})
    }

    componentDidMount(){
        //parse json data
    }

    render(){
        return <div><br />
         <center><div class="ui teal massive label"><font color = "White">Breakdown by Device: {this.state.option}</font></div></center><br/>
        <center>
            <div class = "ui blue large label"><Dropdown text='Time Frame Selection'>
            <Dropdown.Menu>
                <Dropdown.Item text='24 Hours' onClick = {() => this.setTimeFrame('hourly')} />
                <Dropdown.Item text='7 Days' onClick = {() => this.setTimeFrame('daily')}/>
                <Dropdown.Item text='4 Weeks' onClick = {() => this.setTimeFrame('weekly')}/>
                <Dropdown.Item text='12 Months' onClick = {() => this.setTimeFrame('monthly')}/>
                <Dropdown.Item text='10 Years' onClick = {() => this.setTimeFrame('yearly')}/>
                </Dropdown.Menu>
            </Dropdown> 
            </div><br />
        </center><br />
        
        </div>
    }

}


export default WaterTimeline