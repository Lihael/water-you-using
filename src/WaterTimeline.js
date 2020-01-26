import React from 'react'
import {VictoryChart, VictoryLine} from 'victory'
import {Dropdown} from 'semantic-ui-react'

var hourlyJSON = null
var dailyJSON = null
var weeklyJSON = null
var monthlyJSON = null
var yearlyJSON = null
var hourly = []
var daily = []
var weekly = []
var monthly = []
var yearly = []

const date = new Date()
const today = date.getDay()
const thisHour = date.getHours()


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
        //parse hours JSON
        var http_req = new XMLHttpRequest();
        http_req.open("GET",'http://dorm.buttersalt.me:5000/breakdown/mitchell/testpassmitchell/HOURLY_DATA_POINT',false);
        http_req.send(null);
        hourlyJSON = JSON.parse(http_req.responseText)
        //parse hours
        hourly[0] = hourlyJSON[0].h1
        hourly[1] = hourlyJSON[0].h2
        hourly[2] = hourlyJSON[0].h3
        hourly[3] = hourlyJSON[0].h4
        hourly[4] = hourlyJSON[0].h5
        hourly[5] = hourlyJSON[0].h6
        hourly[6] = hourlyJSON[0].h7
        hourly[7] = hourlyJSON[0].h8
        hourly[8] = hourlyJSON[0].h9
        hourly[9] = hourlyJSON[0].h10
        hourly[10] = hourlyJSON[0].h11
        hourly[11] = hourlyJSON[0].h12
        hourly[12] = hourlyJSON[0].h13
        hourly[13] = hourlyJSON[0].h14
        hourly[14] = hourlyJSON[0].h15
        hourly[15] = hourlyJSON[0].h16
        hourly[16] = hourlyJSON[0].h17
        hourly[17] = hourlyJSON[0].h18
        hourly[18] = hourlyJSON[0].h19
        hourly[19] = hourlyJSON[0].h20
        hourly[20] = hourlyJSON[0].h21
        hourly[21] = hourlyJSON[0].h22
        hourly[22] = hourlyJSON[0].h23
        hourly[23] = hourlyJSON[0].h24

        //parse daily JSON
        var http_req2 = new XMLHttpRequest();
        http_req2.open("GET",'http://dorm.buttersalt.me:5000/breakdown/mitchell/testpassmitchell/DAILY_DATA_POINT',false);
        http_req2.send(null);
        dailyJSON = JSON.parse(http_req2.responseText)
        //parse days
        daily[0] = dailyJSON[0].d1
        daily[1] = dailyJSON[0].d2
        daily[2] = dailyJSON[0].d3
        daily[3] = dailyJSON[0].d4
        daily[4] = dailyJSON[0].d5
        daily[5] = dailyJSON[0].d6
        daily[6] = dailyJSON[0].d7
    }

    render(){
        if(this.state.option === 'hourly'){
            return <div><br/>
            <center><div class="ui teal massive label"><font color = "White">Breakdown by Device: {this.state.option}</font></div></center><br/>
            <center>
                <div class = "ui blue large label"><Dropdown text='Time Frame Selection'>
                <Dropdown.Menu>
                    <Dropdown.Item text='24 Hours' onClick = {() => this.setTimeFrame('hourly')} />
                    <Dropdown.Item text='7 Days' onClick = {() => this.setTimeFrame('daily')}/>
                    </Dropdown.Menu>
                </Dropdown> 
                </div><br />
            </center><br />
            <VictoryChart>
            <VictoryLine
                data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 6 }
                ]}
            />
            </VictoryChart>
            </div>
        }
        else {
            return <div><br/>
            <center><div class="ui teal massive label"><font color = "White">Breakdown by Device: {this.state.option}</font></div></center><br/>
            <center>
                <div class = "ui blue large label"><Dropdown text='Time Frame Selection'>
                <Dropdown.Menu>
                    <Dropdown.Item text='24 Hours' onClick = {() => this.setTimeFrame('hourly')} />
                    <Dropdown.Item text='7 Days' onClick = {() => this.setTimeFrame('daily')}/>
                    </Dropdown.Menu>
                </Dropdown> 
                </div><br />
            </center><br />
            <VictoryChart>
            <VictoryLine
                data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 6 }
                ]}
            />
            </VictoryChart>
            </div>
        }
        
    }

}

//<Dropdown.Item text='4 Weeks' onClick = {() => this.setTimeFrame('weekly')}/>
//<Dropdown.Item text='12 Months' onClick = {() => this.setTimeFrame('monthly')}/>
//<Dropdown.Item text='10 Years' onClick = {() => this.setTimeFrame('yearly')}/>


export default WaterTimeline