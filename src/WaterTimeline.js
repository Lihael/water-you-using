import React from 'react'
import {VictoryChart, VictoryLine} from 'victory'
import {Dropdown} from 'semantic-ui-react'

var request = require('request')
var hourlyJSON = null
var dailyJSON = null
var weeklyJSON = null
var monthlyJSON = null
var yearlyJSON = null
const currentDate = new Date()
const currentDay = currentDate.getDay

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
        //parse json data
    }

    render(){
        if(this.state.option === 'hourly'){
        return <div>
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
            </center>
            <VictoryChart>
            <VictoryLine data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 6 }
                ]}/>
            </VictoryChart>
            </div>
        }
        else if(this.state.option === 'daily'){
            return <div>
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
            </center>
            </div>
        }
        else if(this.state.option === 'weekly'){
            return <div>
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
            </center>
            </div>
        }
        else if(this.state.option === 'monthly'){
            return <div>
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
            </center>
            </div>
        }
        else {
            return <div>
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
            </center>
            </div>
        }

}
}


export default WaterTimeline