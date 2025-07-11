import React from "react";

class Bike extends React.Component{
    constructor(){
        super();
        this.state = {color:'Black', model:'Ferari'}
    }
    render() {
         return (
            <>
                <h1>My Bike Color is {this.state.color} & Model is {this.state.model} </h1>
                <button onClick={() => this.setState({ color: 'White' })}>  
                    Change Color
                </button>
            </>
        );
    }
}
export default Bike

 
//function lo With useState(), if you do this: setScooter({ color: 'Blue' }); React replaces the entire state object with { color: 'Blue' } ❗
//You lose all other properties like brand, model, year, etc.

//ikada, class components lo state different gah behave chesthadhi, 
//In class components, when you call: this.setState({ color: 'White' }); now ferari value stays though new state updated
// here we dont need to get the previous values, React merges the new state with the previous one — this is called a shallow merge.
//That's why you still see model: 'Ferari' even though you didn't explicitly set it again.