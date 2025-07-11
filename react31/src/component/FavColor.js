import { useState } from "react";

function FavoriteColor(){
   const [color, SetColor] = useState('Blue');
    return(
        <>
         <h1>My Favorite Color is {color}</h1>
         <button onClick={ ()=> {SetColor('Red')}}>Change Color</button>
        </>
    )
}
export default FavoriteColor;