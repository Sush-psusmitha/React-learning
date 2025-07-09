import Car from "./Car";
import Apple from "./Apple";
function Garage() {
    // const brand = "Ferari";
    const CarInfo = {brand:'Ferari', color:'black', price:'4.5Cr'}
    const appleInfo = {color:'red',type:'Fuji'}
    return(
        <>
          <h1>Who lives in the Garage?</h1>
          {/* <Car brandName = {brand} color = {"blue"} price={'2Cr'}/> */}
          <Car CarInfo={CarInfo}/>
          <Apple appleInfo ={appleInfo} />
        </>
    )
}
export default Garage;