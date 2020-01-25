import React from 'react'
import { Progress } from 'semantic-ui-react'
import ReactInterval from 'react-interval';


class WaterBreakdown extends React.Component{
    state = {time: 0}
    render(){
        
        return <div>
      <Progress progress='value' value={35} total={50} />
        </div>
    }
}

export default WaterBreakdown