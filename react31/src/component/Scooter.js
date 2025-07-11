import { useState } from "react"; 

function Scooter(){
   const [color, setColor] = useState('Red');
   const [brand, setBrand] = useState('BMW');
   const [model, setModel] = useState('Activa 5G');
   const [year, setYear] = useState('2025');

   function ScooterDetails(){
    setColor('Purple');setBrand('Honda');setModel('Jupitor');setYear('2030')
   }
    return(
        <>
         <h1>Multiple state values</h1>
          <h2>My Scooter Features are:</h2>
          <p>Color : {color}</p>
          <p>Brand:{brand}</p>
          <p>Model:{model}</p>
          <p>Year:{year}</p>

          {/* <button onClick={()=>{setColor('Purple');setBrand('Honda');setModel('Jupitor');setYear('2030')}}>Change</button> */}

          <button onClick={()=>ScooterDetails()}>Change Details</button>
        </>
    )
}
export default Scooter;