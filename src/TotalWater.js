import React from 'react';




class TotalWater extends React.Component {
  state = {waterOunces: 0};
  componentDidMount(){
    this.setState({waterOunces:1000})
  }
  render() {
    return <div class="ui teal statistic">
    <div class="value">
        {this.state.waterOunces}
    </div>
    <div class="label"><font color = "White">
      Ounces of Water Used</font>
    </div>
  </div>
}
}

export default TotalWater;