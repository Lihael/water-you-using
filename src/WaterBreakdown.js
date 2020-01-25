import React from 'react'
import {Progress} from 'semantic-ui-react';
import ReactInterval from 'react-interval';
import PieChart from 'react-minimal-pie-chart';
import {VictoryPie} from 'victory';
import {VictoryBar} from 'victory';


class WaterBreakdown extends React.Component{
    state = {time: 0}
    render(){
        const time = this.state.time
        return <div>
        <ReactInterval timeout={1000} enabled={true}
          callback={() => this.setState({count: this.state.count + 1})} />
          <h><center><font color = "White">Breakdown by Device</font></center></h>
        <VictoryPie
          colorScale = "cool"
         style={{ labels: { fill: "white" } }}
  data={[
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 }
  ]}
/>
<h><center><font color = "White">Total Breakdown</font></center></h>
<VictoryBar
  barRatio={2}
  data={[
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 }
  ]}
  labels={({ datum }) => datum.y}
  style={{ labels: { fill: "white" } }}
/>
        </div>
    }
}

export default WaterBreakdown