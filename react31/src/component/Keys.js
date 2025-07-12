import React from "react";
import { useState } from "react";

// function Keys(){
//      const list = ['Sushmitha', 'Anu', 'Ravi'];
//      const users = [
//     { id: 101, name: 'Sushmitha' },
//     { id: 102, name: 'Arjun' },
//     { id: 103, name: 'Priya' }
//   ];
//     return(
//         <>
//         <h2>List and Keys using map function and</h2>
//         <ul>
//            {list.map((e,index) => <li key={index}>{e}</li>)}
//         </ul>
//         <ol>
//             {users.map(e => <li key={e.id}>{e.name}</li>)}
//         </ol>

//          <button onClick={addName}>Add Names</button>
//         </>
//     )
// }

//adding and updating list with state 

function Keys(){
   const [Items, setItems] =  useState([ ]);
   const [count, setCount] = useState(1)
   
   function addItems(){
    const Item = 'Item ' + count
    setItems((prev) =>[...prev, Item]); 
    setCount((prev) => prev+1)
   }
console.log('current State', Items)
    return(
     <>
       <h1>Creating and updating List with state and previous values</h1>
       <button onClick={addItems}>Add Item</button>
       <ul>
        {Items.map((e,index) =><li key={index}>{e}</li> )}
       </ul>
       
     </>
    )
}
export default Keys