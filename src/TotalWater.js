import React from 'react';




class TotalWater extends React.Component {
  state = {waterOunces: 0};
  componentDidMount(){
    this.setState({waterOunces:1000})
    //get total water today
    var totalWaterJSON
    var totalWaterNum
    var http_req2 = new XMLHttpRequest();
        http_req2.open("GET",'http://dorm.buttersalt.me:5000/gettodaysusage/mitchell/testpassmitchell',false);
        http_req2.send(null);
        totalWaterJSON = JSON.parse(http_req2.responseText)
        totalWaterNum = totalWaterJSON[0].text
        this.setState({waterOunces:totalWaterNum})
  }
  render() {
    return <div><br/><div><center><div class="ui teal massive label">
        {this.state.waterOunces}
    </div></center>
    <div class="label"><font color = "White">
      Gallons of Water Used Today</font> <br /><br />
    </div>
  </div> </div>
}
}

export default TotalWater;