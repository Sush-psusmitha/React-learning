import { useState } from "react";

function List(){
    const [list,setList] = useState([]); 
    const [count,SetCount] = useState(1);

    function add(){
       const ItemName = "Item " + count; 
       setList((prev)=>{return ([ ...prev,ItemName])});
       SetCount(prev=>prev+1);
    }
    console.log("curent State", list)
    return(
        <>
          <h2>List - creating and updating list with state</h2>
          <button onClick={add}>Add Items</button>
          <ul>
            {
                list.map((ele,index) => <li key={index}>{ele}</li> )
            }
          </ul>
        </>
    )
}

export default List