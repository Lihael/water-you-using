import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import semReact from 'semantic-ui-react'
import ReactInterval from 'react-interval'


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
    <div class="label">
      Ounces of Water Used
    </div>
  </div>
}
}

export default TotalWater;