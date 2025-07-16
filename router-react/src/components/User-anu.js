import React from "react"
import { useParams } from "react-router-dom"
export default function UserAnu(){
    const {name} = useParams();
    return (
       <>
         <h1>User Profiles</h1>
         <p>Name : {name}</p>
       </>
    )
}