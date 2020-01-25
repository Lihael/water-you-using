import React from 'react'
import TotalWater from './TotalWater'
import WaterBreakdown from './WaterBreakdown'


class Content extends React.Component{
    state = {page: 'TotalWater'}
<<<<<<< HEAD
<<<<<<< HEAD
    render(){
        this.setState(this.props.page)
=======
    render(props){
        this.setState(props)
>>>>>>> parent of 6155dda... added buttons working
=======
    render(props){
        this.setState(props)
>>>>>>> parent of 6155dda... added buttons working
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