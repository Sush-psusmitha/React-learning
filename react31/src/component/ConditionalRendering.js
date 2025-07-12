
import React from 'react';

//1.Using if condition outside JSX

// function Greetings(props) {
//     const {IsLoggedIn} = props; 

//     if(IsLoggedIn){
//        return <h1>Hello Welcome Back!!!</h1>
//     }
//     else{
//         return <h1>Please Log In!</h1>
//     }
// }

//2. using Ternary operator: 

// function Greetings(props){
//     const {IsLoggedIn} = props; 
//     return (
//         <h1>{IsLoggedIn ? 'Welcomeback bro!' : 'Please Login bro!'}</h1>
//         //Here, condition ? ifTrue : ifFalse is used.
//     )

// }


//3. Using Logical && (show only if true)

// function Greetings(props){
// const {IsLoggedIn} = props; 

// return(
//     <>
//       <h1>Loggings</h1>
//       {IsLoggedIn && <p style={{color:'Green'}}><b>Welcome Thanks for Logging in👍</b></p>}
//     </>
// )
// }

//Using class componet: 

class Greetings extends React.Component{
    constructor(){
        super();
        this.state = {
            isDay:true
        }
    }

    render(){
        return (
            <>
              <h1>Greetings</h1>
              {this.state.isDay ? <p>Good Morning</p> : <p>Good Night!!!</p>}
              <button onClick={() => this.setState({isDay : !this.state.isDay})}>Toggle Greet</button>
            </>
        )
    }
}


export default Greetings