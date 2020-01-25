import React from 'react';




class TotalWater extends React.Component {
  state = {waterOunces: 0};
  componentDidMount(){
    this.setState({waterOunces:1000})
  }
  render() {
    return <div><br/><div><center><div class="ui teal massive label">
        {this.state.waterOunces}
    </div></center>
    <div class="label"><font color = "White">
      Ounces of Water Used This Month</font> <br /><br />
    </div>
  </div> </div>
}
}

export default TotalWater;