import React from 'react'
import TotalWater from './TotalWater'
import WaterBreakdown from './WaterBreakdown'
import WaterTimeline from './WaterTimeline'


function Content(props){
    if(props.page === 'TotalWater'){
        return <TotalWater/>
    }
    else if(props.page === 'WaterBreakdown'){
        return <WaterBreakdown/>
    }
    else if(props.page === 'Water Timeline'){
        return <WaterTimeline/>
    }
    else{
        return <p></p>
    }
}


export default Content