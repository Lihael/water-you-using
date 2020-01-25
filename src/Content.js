import React from 'react'
import TotalWater from './TotalWater'
import WaterBreakdown from './WaterBreakdown'


class Content extends React.Component{
    state = {page: 'WaterBreakdown'}
    render(){
         if(this.state.page === 'TotalWater'){
             return <TotalWater/>
         }
         else if(this.state.page === 'WaterBreakDown'){
             return <WaterBreakdown/>
         }
         else{
             return <p></p>
         }
    }

}


export default Content