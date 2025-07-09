import React from "react";
class Apple extends React.Component{   
    render(){
       const {appleInfo} = this.props; 
     //const{color,type} = appleInfo; //can destructure and use property name directly or by objectname with dor(.)
       return(
       <h2> Hello I'm {appleInfo.color} {appleInfo.type} Apple!! - class comp with props</h2>
      )       
    }
}
export default Apple