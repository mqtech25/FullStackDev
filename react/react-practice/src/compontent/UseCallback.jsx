import { useCallback,  useState } from "react";
import React from "react";


const CallBack = React.memo(({total})=>{
  return (
    <>
      <h2>Spin Number {total}</h2>
    </>
  );
}
);


function UseCallbackHook(){
    const [aValue,setaValue]=useState(0);
const [bValue,setbValue]=useState(0);

    const sum = useCallback(()=>{
        let x = aValue + bValue;
        return x;
    },[aValue,bValue])


    return (
     <>
        <h1 style={{ textAlign: "center", fontSize: "28px", marginTop: "30px" }}>
        useCallback Hook 
         </h1>

         <CallBack total={sum()}/>
        
         <button onClick={()=>{
            setaValue(aValue=> aValue+1)
            setbValue(bValue=> bValue+1)
         }}>Spin</button>
     </>
    )
}

export default UseCallbackHook;