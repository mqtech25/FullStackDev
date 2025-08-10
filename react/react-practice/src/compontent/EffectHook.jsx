import { useEffect, useState } from "react";

// useEffect()) = React Hook that tells React to DO THIS CODE WHEN (pick one):
// This component re-renders
// This component mounts
// The state of a value
// useEffect(function, [dependencies])
// 1.useEffect（（）=> ｝）// Runs after every re-render
// 2 useEffect（（）=> 0｝，［］）// Runs only on mount // mount mean when first time component render and unmount remove from component render
// 3. useEffect( => f, [valuel) // Runs on mount + when value changes
// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an APT
// #5 Clean up when a component unmounts

function EffectHook(){
   const [count,setCount]= useState(0);

   const [winWidth , setWinWidth] = useState(window.innerWidth);
   const [winHeight , setWinHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener('resize',handleWindowHeightWidth)
        console.log('window reize');

        return()=>{
            window.removeEventListener('resize',handleWindowHeightWidth)
        }
    },[winHeight,winWidth])

    useEffect(()=>{
        document.title = `Count ${count}`;
        console.log('title updated');
    },[count])

    let handleWindowHeightWidth =()=>{
        setWinHeight(window.innerHeight)
        setWinWidth(window.innerWidth)
    }


    
    // console.log(`${winWidth} * ${winHeight}`);
    return (
        <>
        <p style={{textAlign:"right"}}>{winHeight} * {winWidth}</p>
        <p style={{textAlign:"right"}}>height * width</p>
        <h1 style={{textAlign:"center",fontSize:'28px',marginTop:"30px"}}>Counter {count} </h1>
        <div style={{textAlign:"center",marginTop:"30px"}}>
        <button style={{padding:'0px 20px',background:'green',fontSize:'28px',color:"white",cursor:"pointer",}} onClick={()=>{
            setCount(count + 1)
        }}>+</button>
        <button style={{padding:'0px 20px',background:'red',fontSize:'28px',color:"white",cursor:"pointer"}} onClick={()=>{
            setCount(count=> count>0? count - 1:count)
        }}>-</button>
        </div>
        </>
    )
}

export default EffectHook;