import React from 'react'
import TotalWater from './TotalWater'
import WaterBreakdown from './WaterBreakdown'


function Content(props){
    if(props.page === 'TotalWater'){
        return <TotalWater/>
    }
    else if(props.page === 'WaterBreakdown'){
        return <WaterBreakdown/>
    }
    else{
        return <p></p>
    }
}


export default Content