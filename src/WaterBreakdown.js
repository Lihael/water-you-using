import React from 'react'
import {Progress} from 'semantic-ui-react';
import ReactInterval from 'react-interval';


class WaterBreakdown extends React.Component{
    state = {time: 0}
    render(){
        const time = this.state.time
        return <div>
        <ReactInterval timeout={1000} enabled={true}
          callback={() => this.setState({count: this.state.count + 1})} />
        <Progress progress='value' value={35} total={50} />
        </div>
    }
}

export default WaterBreakdown