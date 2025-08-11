import { useEffect, useMemo, useState } from "react";

const FetchData = async ()=>{
    let response = await fetch('https://api.github.com/users/mqtech25');
    let result = await response.json()

    return result;
}

function useMemoFunc() {

    const [data,setData]= useState(null);

    useEffect(()=>{
        // let response =  fetch('https://api.github.com/users/mqtech25');
        //  response.then((res)=>{
        //     res.json().then((result)=>{
        //         setData(result)
        //     })
        //  })
    
        FetchData().then(setData);
    },[])

    const nameLength = useMemo(()=>{
        return data? data.name.length: null
    },[data])

return(
    <>
     <h1 style={{ textAlign: "center", fontSize: "28px", marginTop: "30px" }}>
      UseMemo Hook 
       </h1>
    {data?(<><h2>{data.name}</h2> <h3>Name length Memorized using Memo{nameLength}</h3> </>): (<p>data loading</p>  )
    }
    </>
)   
}

export default useMemoFunc;

// import { useEffect, useState, useMemo } from "react";

// async function fetchData() {
//   let response = await fetch("https://api.github.com/users/mqtech25");
//   let result = await response.json();
//   return result;
// }

// function UseMemoExample() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetchData().then(setData);
//   }, []);

//   const nameLength = useMemo(() => {
//     return data ? data.name.length : 0;
//   }, [data]);

//   return (
//     <>
//       <h1 style={{ textAlign: "center", fontSize: "28px", marginTop: "30px" }}>
//         UseMemo Hook
//       </h1>

//       {data ? (
//         <>
//           <p>Name: {data.name}</p>
//           <p>Length of name (memoized): {nameLength}</p>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </>
//   );
// }

// export default UseMemoExample;
