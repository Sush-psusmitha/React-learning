import React from "react";

class Apple extends React.Component{
  render(){
    const {appleinfo} = this.props; 
    const {color, type} = appleinfo;
    return(
      <>
      <h2>I'm {color} {type} Apple!!</h2>
      </>
    )
  }
}

export default Apple