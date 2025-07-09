
function Car({CarInfo}) {  
//    const {CarInfo} = props; //we can pass the object with in the {} as props
   const{brand,color} = CarInfo
   const text = `I'm ${brand} ${color} Car and price is ${CarInfo.price}`
    return(
        <>
         <h2>{text} - function Comp with props</h2>       
        </>        
    )
}
export default Car;