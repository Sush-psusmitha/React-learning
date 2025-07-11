import React from "react";

class Bike extends React.Component{
    constructor(){
        super(); 
        this.state = {color:'Green'}
    }
   render(){
    return(
        <>
          <h1>My Bike Color is {this.state.color}</h1>
          <button onClick={()=> {this.setState({color:'Yellow'})}} >Change Color</button>
        </>
    )
   }
}
export default Bike;