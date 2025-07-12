import React from "react";
// import { useState } from "react";

// function Counter(){
//     const [count, SetCount] = useState(0);

//     return(
//         <>
//           <h1>Count: {count}</h1>
//           <button onClick={() => SetCount((prev)=> {return prev+1})}>Increase</button>
//         </>
//     )
// }

class Counter extends React.Component{
    constructor(){
        super(); 
        this.state = {count:0}
    }
    render(){
        return(
            <>
             <h1>Count: {this.state.count}</h1>
             <button onClick={()=> this.setState({count: this.state.count + 1})}>Increaseeee</button>
            </>
        )
    }
}

export default Counter