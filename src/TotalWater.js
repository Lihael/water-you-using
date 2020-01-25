import React from 'react';

class TotalWater extends React.Component{
    state = {}
  render(){
    return <div className="App"> 
            <svg height="100" width="100">
            <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
            </svg>
            <svg height="30" width="200">
            <text x="50" y="50" fill="red">I love SVG!</text>
            </svg>
           </div>
  }
}

export default TotalWater;