import React, { useState } from "react";

function FavoriteColor(){
    // let color = "Blue"
      const [color,SetColor] = useState('Blue')
    return(
        <>
          <h1>My Favorite Color is {color}</h1>
          <button onClick={()=>{SetColor('Orange')}}>Change Color</button>
        </>
    )
}

export default FavoriteColor
