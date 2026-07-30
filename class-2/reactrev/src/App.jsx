// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let [count, setCount]=useState(0);
//   let [city, setCity]=useState("Pune");

//   useEffect(()=>{
//     console.log("hiiieeee");
//   },[count])

//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>{
//       return res.json();
//     }).then((data)=>{
//       console.log(data);
//     })
//   },[city])

//   return (
//     <div>
//       <h1>{count}</h1>
//       <h1>{city}</h1>
//       <button onClick={()=>{setCount(count-1)}}>-</button>
//       <button onClick={()=>{setCount(0)}}>reset</button>
//       <button onClick={()=>{setCount(count+1)}}>+</button>
//       <button onClick={()=>{setCity("Vadodara")}}>change city</button>
//     </div>
//   )
// }

// export default App



import React, { useEffect, useState } from 'react'

const App = () => {
  let [apidata, setApidata]=useState([]);
  console.log(apidata,"apidataaaaa")


  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>{
      return res.json();
    }).then((data)=>{
      console.log(data);
      setApidata(data);
    })
  },[])


  return (
    <>

    {apidata.map((item)=>(
      <div key={item.id}>
        <h5>{item.title}</h5>
      </div>
    ))}
    </>
    
  )
}

export default App