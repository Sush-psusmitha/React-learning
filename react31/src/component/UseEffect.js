//useEffect() - React Hook that tells react to DO SOME CODE WHEN : 

//this component re-renders
//this component mounts ("Mount" means the component is added to the screen for the first time.)
// the state of a value change

//useEffect(function,[dependencies]); 

//1. useEffect(() => {})            //Runs after every re-renders
//2. useEffect(() => {}, [])       // Runs only on mount
//3. useEffect(()=>}{}, [value])   // Reuns on mount + when value changes 

//uses
//1. Event Listners
//2. DOM Manupulation
//3. Subscriptions (real-time updates)
//4. Fetching Data from an API
//5. Clean up when a component unmounts

//==================================================================================

import React, {useState, useEffect} from "react";

//function Useeffect(){

    // const [count, setCount] = useState(0);
    // const [color,setColor] = useState('red')
//1. do some code after every render
    // useEffect(() => {
    //     document.querySelector('h2').textContent= ` Count: ${count}`
    //     console.log('Compount re-renders')
    // })

//2. runs only when mount(add to screen only first time)
    // useEffect(() => {
    //     document.querySelector('h2').textContent= `Count: ${count}`
    //     console.log('Compount re-renders')
    // },[])

 //3. runs when value change and mount (DO SOME CODE) 
//         useEffect(() => {
//                 document.querySelector('h2').textContent= ` Count: ${count}: ${color}`
//                 console.log('Compount re-renders'); 
//             },[count,color])
 

//     function addCount(){
//         setCount(prev=>prev+1)
//     }
    
//     function SubtractCount(){
//         setCount(prev=>prev-1)
//     }
//     function ChangeColor(){
//         setColor(prevColor => prevColor === 'green' ? 'red':'green')
//     }

//     return(
//      <>
//        <h1>Use Effect</h1>
//        <h2 style={{color:color}}>state value will come</h2>
//        <p>Count: {count}</p>
//        <button onClick={addCount}>Add</button>
//        <button onClick={SubtractCount}>Subtract</button>
//        <button onClick={ChangeColor}>Change Color</button>

//      </>
//     )
// }

//eg: 1
function Useeffect(){
    const [widht, setWidth] = useState(window.innerWidth); 
    const [height, setHeight] = useState(window.innerHeight)
  
  
    useEffect(()=>{
        window.addEventListener("resize",handleResize); 
        console.log("Event Listener Addedd")  

        return () => {
            window.removeEventListener("resize",handleResize)
            console.log("Event Listner removed")
        }
    },[])

    useEffect(()=>{
        document.title = `Size: ${widht} x ${height}`
    },[height,widht]); 

    function handleResize(){
      setWidth(window.innerWidth); 
      setHeight(window.innerHeight); 
    }
      
    

    return(
        <>
        <h2>Example for useeffect</h2>
        <p>window width : {widht}px</p>
        <p>window height : {height}px</p>
        </>
    )
}

















export default Useeffect