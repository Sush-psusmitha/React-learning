// import { useState } from "react";

import { useState } from "react"


// function MyForm(){
// // const [name, SetName] = useState(""); 
// // const [age, SetAge] = useState("")
// // const [email, SetEmail] = useState("")

// const[Inputs, SetInputs] = useState("")


// // console.log("Current State:" , name)

// function handleSubmit(e){
//     e.preventDefault(); 
//     console.log("Form Submitted!!")
//     // console.log("Cureent State:", name, age, email)
//     console.log("Cureent State:", Inputs)
// }

// function handleChnage(e){
//     const name = e.target.name; 
//     const value = e.target.value;
//     SetInputs((prev)=>{return { ...prev, [name]: value} })
// }
// // }
// return(
// // return(
//     <form onSubmit={handleSubmit}>   
//     <label>Enter Your Name: <input type="text" name="Name"  onChange={handleChnage}  /></label> <br />
//     <label>Enter Your Age: <input type="text" name="Age"  onChange={handleChnage}  /></label> <br />
//     <label>Enter Your Email: <input type="text" name="Email" onChange={handleChnage} /></label> <br />

//      <input type="submit" value="Submit" />
//     </form>
// )
// }
// export default MyForm

//====================PRACTICE========================================

// function MyForm(){
// const [Inputs, setInputs] = useState("");

// function handleSubmit(e){
//   e.preventDefault(); 
//   console.log("Form Submitted!!")
//   console.log("Currect State: ", Inputs);
// }

// function handleChange(e){
//   const name = e.target.name; 
//   const value = e.target.value; 

//   setInputs((prev)=>{ return {...prev, [name] : value } }) 
//   //empty object lo values pette tapudu property names ni [] bracket lo petali
// }
//     return(

//       <form onSubmit={handleSubmit}>
//         <label>Enter Your Name: <input type="text" name="Name" onChange={handleChange} /></label>  <br />
//         <label>Enter Your Age: <input type="text" name="Age" onChange={handleChange} /></label><br />
//         <label>Enter Your Email: <input type="text" name="Email" onChange={handleChange} /></label><br />
//          <input type="submit" value="Submit" />
//       </form>
//     )
// }
// export default MyForm

function MyForm(){
 const[Inputs, setInput] = useState({phone: "+91", email:"@gmail.com", country:"India"}); 

const handleSubmit = (e) => {
 e.preventDefault();
  console.log("Form Submitted!"); 
  console.log("Current State: ", Inputs)
}
 function handleChange(e){
  const name = e.target.name; 
 const value = e.target.value; 

 setInput((prev)=>{return {...prev, [name]:value}})
 }

  return(
    <>
      <h2>Forms in React</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter your Name: <input type="text" name="Name" onChange={handleChange}/></label><br/>
        <label>Enter your Age: <input type="text" name="Age" onChange={handleChange}/></label><br/>
        <label>Enter your Email: <input type="text" name="Email" onChange={handleChange} value={Inputs.email}/></label><br />
        <label>Enter your Phone: <input type="text" name="phone" onChange={handleChange} value={Inputs.phone}/></label><br />
        <label>Select your Country:  <select name="country" onChange={handleChange} value={Inputs.country}>
             <option value="">Select</option>
              <option value="Australia">Australia</option>
              <option value="US">US</option>
              <option value="UK">UK</option>
           </select>
          </label><br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default MyForm;

