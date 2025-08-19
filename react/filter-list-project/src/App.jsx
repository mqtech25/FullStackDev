import { useMemo } from "react";
import { useState } from "react";

const cardData =[
  {
    imageUrl : "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    title:"Glasses"
  },
  {
    imageUrl : "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U0hPRVN8ZW58MHx8MHx8fDA%3D",
    title:"Shoes"
  },
  
  {
    imageUrl : "https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Gaming accessories"
  },
  
  {
    imageUrl : "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    title:"Perfumes"
  },
  
  {
    imageUrl : "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    title:"Makeup Products"
  },
  
  {
    imageUrl : "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=856&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Bages"
  },
  
  {
    imageUrl : "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Shirt"
  },
  
  {
    imageUrl : "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Watch"
  }
]


function App(){

const [search,setSearch]= useState('');

const filterData = useMemo(()=>{
  let filter = cardData.filter((item)=>{
    let items =item.title.toLocaleLowerCase();
    let searchItem =search.toLocaleLowerCase();
    return items.includes(searchItem)
  })
  return filter;
},[search])

  return(
    <div className="w-full min-h-screen h-full p-3 bg-slate-900">
      <h1 className="text-center text-white text-4xl my-4">Filter In React</h1>
      <div className="max-w-2xl mx-auto my-6">
        <input type="text" className="bg-white w-full rounded-md py-3 px-3 shadow-lg focus:outline-none focus:shadow-cyan-500/50 transition focus:-translate-y-1" placeholder="Search Item..." value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      </div>
      <div className="container m-auto">
        <div className="flex flex-wrap gap-5 justify-center my-9">
           
           {
            filterData.map((item,index)=>(
              <div key={index} className="column-md my-2 bg-slate-500/50 rounded-md shadow-lg hover:shadow-slate-500/50 transition hover:-translate-y-1">
              <img src={item.imageUrl} className="w-100 rounded-md rounded-es-none rounded-ee-none h-60 object-cover" alt="" />
               <p className="text-center text-white text-2xl my-4">{item.title}</p>

            </div>
            ))
           }
         
        </div>
      </div>
    </div>
  )
}

export default App;