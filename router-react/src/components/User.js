import React from "react"
import { useParams } from "react-router-dom"
export default function User(){
    const {id} = useParams();
    return (
       <>
         <h1>User Profiles</h1>
        <p>User Id <b>{id} </b></p>
        {/* <p>Name : {name}</p> */}
       </>
    )
}