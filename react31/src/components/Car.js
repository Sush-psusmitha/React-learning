function Car(props){
    const {CarInfo} = props; 
    // const {brand,color} = CarInfo; 
   // const text = `Hello I'm ${color} ${brand} Car!!`
   const text = `Hello I'm ${CarInfo.color} ${CarInfo.brand} Car!`
    return (
        <>
         <h2>{text}</h2>
        </>
    )
}

export default Car;