import React, { useEffect, useState } from 'react'

const App = () => {

  let [input,setInput]=useState("")
  let [item, setItem]=useState([]);

  async function apicall(){
    if(input.trim()==""){
      alert("emptyyy");
      return;
    }
    let res=await fetch(`https://dummyjson.com/products/search?q=${input}`)
    let data=await res.json()
    console.log(data)
    setItem(data.products)

  }
  useEffect(()=>{
     fetch("https://dummyjson.com/products").then((res)=>{
       return res.json();
     }).then((data)=>{
       setItem(data.products);
     })
   },[])

   function asc(){
    let sorteditem=[...item].sort((a,b)=>a.price-b.price)
    setItem(sorteditem);
   }

   function des(){
    let sorteditem=[...item].sort((a,b)=>b.price-a.price)
    setItem(sorteditem);
   }

  return (
    <div>
      <input placeholder='Enter' onChange={(e)=>setInput(e.target.value)}></input>
      <button onClick={apicall}>Search</button>
      <button onClick={asc}>Ascending</button>
      <button onClick={des}>Descending</button>
      {item.map((a)=>(
        <div>
        <h4>{a.title}</h4>
        <img src={a.thumbnail}></img>
        <h5>${a.price}</h5>
        </div>
      ))}
    </div>
  )
}

export default App