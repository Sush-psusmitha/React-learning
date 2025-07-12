import { useEffect ,useState} from "react";

function Timer(){
    
         const [count, SetCount] = useState(0)
        
         useEffect(()=>{
            console.log('Screen rendered!!!')  //useEffect used to check over the poperty and each time propery value changes call back function calls 
            CheckCount()
            // SetCount(1)

            // setTimeout(()=>{
            //     SetCount((prev)=>{return prev+1})
            // },1000)
         })

         function CheckCount(){
            if(count > 10){
                SetCount(1)
            }  
         }

         function increseCount(){
            SetCount((prev)=>{return prev+1})
         }

    return(
        <>
          <h3>I have rendered My screen {count} time</h3>
          <button onClick={increseCount}>Render Count</button>
        </>
    )
}

export default Timer;