// import React, { useState } from 'react'

// const App = () => {
  
//   let [count, setCount]=useState(0);
  
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count-1)}>-</button>
//       <button onClick={()=>setCount(0)}>reset</button>
//       <button onClick={()=>setCount(count+1)}>+</button>
//     </div>
//   )
// }

// export default App




// import React, { useState } from 'react'

// const App = () => {
//   let [count, setCount]=useState(0)
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count-1)}>-</button>
//       <button onClick={()=>setCount(0)}>reset</button>
//       <button onClick={()=>setCount(count+1)}>+</button>
//       <Home/>
//     </div>
//   )
// }


// const Home = () => {
//   console.log("hehehehe")
//   return (
//     <div>Home</div>
//   )
// }


// export default App



import React, { useState } from 'react'

const App = () => {
  let [bgcolor, setBgcolor]=useState("red")

  return (
    <div style={{backgroundColor:bgcolor, height:"100vh", margin:0, padding:0}}>
      <button onClick={()=>{setBgcolor("tomato")}}>change color</button>
    </div>
  )
}

export default App