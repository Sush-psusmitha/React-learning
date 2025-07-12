import { useState } from "react"; 

function Scooter(){
//    const [color, setColor] = useState('Red');
//    const [brand, setBrand] = useState('BMW');
//    const [model, setModel] = useState('Activa 5G');
//    const [year, setYear] = useState('2025');

//we can write multiple state values as an object and also update   
const [scooter, setScooter ] = useState(
    {
        color:'Maroon', 
        brand:'BMW', 
        model:'Activa 6G', 
        year: '2024'
    }
)
   function ScooterDetails(){
//     setScooter(
//         {
//         color:'Purple', 
//         brand:'Honda', 
//         // model:'Jupiter',   //if we update like this only specified values will render but previous wont appear
//         // year:'2025'
//     }
//   ) 

//if we want to update only one value in the object,  for setScooter we should pass previou object as a paramter 
//then which valu we want to update that value if we change, after rendering function will update previous 
//values along with the updated values

     setScooter(previousVal => {
        return {...previousVal, color:'Brown' }
     }      
     )
}  
// console.log("current State", setScooter)

    return(
        <>
         <h1>Multiple state values</h1>
          <h2>My Scooter Features are:</h2>
          <p>Color : {scooter.color}</p>
          <p>Brand: {scooter.brand}</p>
          <p>Model: {scooter.model}</p>
          <p>Year: {scooter.year}</p>

          {/* <button onClick={()=>{setColor('Purple');setBrand('Honda');setModel('Jupitor');setYear('2030')}}>Change</button> */}

          <button onClick={ScooterDetails}>Change Details</button>
        </>
    )
}
export default Scooter;