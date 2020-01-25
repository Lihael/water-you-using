import React from 'react'
import {Progress} from 'semantic-ui-react';
import ReactInterval from 'react-interval';
import PieChart from 'react-minimal-pie-chart';
import {VictoryPie} from 'victory';
import {VictoryBar} from 'victory';


class WaterBreakdown extends React.Component{
    state = {option: 'hourly', toilet: 35, faucet: 40, kitchen: 55}
    render(){
        
        return <div>
        <VictoryPie
          colorScale = "cool"
         style={{ labels: { fill: "white" } }}
  data={[
    { x: "Toilet", y: this.state.toilet},
    { x: "Faucet", y: this.state.faucet },
    { x: "Kitchen", y: this.state.kitchen }
  ]}
/>
<h><center><font color = "White">Total Breakdown</font></center></h>
<VictoryBar
  barRatio={2}
  data={[
    { x: "Toilet", y: this.state.toilet },
    { x: "Faucet", y: this.state.faucet },
    { x: "Kitchen", y:this.state.kitchen }
  ]}
  labels={({ datum }) => datum.y}
  style={{ labels: { fill: "white" } }}
/>
        </div>
    }
}

export default WaterBreakdown