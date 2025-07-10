import Car from "./Car";
import Apple from "./Apple";
function Garage() {
    const AppleInfo = {color:'red', type:'Fuji'}; 
    // const CarInfo = {color:'Black', brand:'Audi'}; 
    const CarInfo = {};
    const ShowCarInfo = CarInfo.color !== undefined && CarInfo.brand !== undefined;
    const isDoorOpen = true;
    const CarList = [
      {color:'Green', brand:'Ferari'},
      {color:'Blue', brand:'Tesla'},
      {color:'Yellow', brand:'Maruthi'}, 
      {color: 'white', brand:'BMW'}
    ]
    const Numbers = [1,2,3,4,6,5]
  
    return(
        <>
          <h1>Who lives in the Garage?</h1>
          { ShowCarInfo ? <Car CarInfo={CarInfo}/> : null }     
          {/* can also write like this using && if showCarinfo true means component will come else won't show */}
          {ShowCarInfo && <Car CarInfo={CarInfo} />}
          <Apple appleinfo = {AppleInfo} />
          {isDoorOpen ? <h2>Garage door is opened!</h2>: <h2>Gargage door is closed!</h2>}
          <hr />
          <ol>
            {CarList.map((info) => <li key ={info.brand}> < Car  CarInfo = {info} /></li>)}   
            {/* here we took brand as a key and passed in li  */}
          </ol>

          <ul>
            {Numbers.map((num, index) => <li key ={index}>{num}</li>)}
            {/* here we took index as a key and passed in li, by this error won't pop in console  */}
          </ul>
          


        </>

    )
}
export default Garage;