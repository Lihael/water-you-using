import React from 'react'
import TotalWater from './TotalWater'
import WaterBreakdown from './WaterBreakdown'


class Content extends React.Component{
    state = {page: 'TotalWater'}
    render(props){
        this.setState(props)

         if(this.state.page === 'TotalWater'){
             return <TotalWater/>
         }
         else if(this.state.page === 'WaterBreakdown'){
             return <WaterBreakdown/>
         }
         else{
             return <p></p>
         }
    }

}


export default Content