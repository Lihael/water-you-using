import React from 'react'
var request = require('request')
var hourlyJSON = null
var dailyJSON = null
var weeklyJSON = null
var monthlyJSON = null
var yearlyJSON = null
class WaterTimeline extends React.Component {
    componentDidMount(){
        request('http://dorm.buttersalt.me:5000/geteventdata/mitchell/testpassmitchell/DAILY_DATA_POINT', function(error,response,body){
            console.log(error)
            console.log(response)
            dailyJSON = body
        })
        request('http://dorm.buttersalt.me:5000/geteventdata/mitchell/testpassmitchell/HOURLY_DATA_POINT', function(error,response,body){
            console.log(error)
            console.log(response)
            hourlyJSON = body
        })
        request('http://dorm.buttersalt.me:5000/geteventdata/mitchell/testpassmitchell/WEEKLY_DATA_POINT', function(error,response,body){
            console.log(error)
            console.log(response)
            weeklyJSON = body
        })
        request('http://dorm.buttersalt.me:5000/geteventdata/mitchell/testpassmitchell/MONTHLY_DATA_POINT', function(error,response,body){
            console.log(error)
            console.log(response)
            monthlyJSON = body
        })
        request('http://dorm.buttersalt.me:5000/geteventdata/mitchell/testpassmitchell/YEARLY_DATA_POINT', function(error,response,body){
            console.log(error)
            console.log(response)
            yearlyJSON = body
        })
    }
    render(){
        return 
    }

}


export default WaterTimeline