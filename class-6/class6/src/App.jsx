// import React, { useCallback, useMemo, useState } from 'react'
// import Child from './Child';

// const App = () => {
//   let [count,setCount]=useState(0);
  
//   // let res=0;
//   // for(let i=0;i<100000000;i++){
//   //   res+=i;
//   // }

//   // let data=useMemo(()=>{
//   //   let res=0;
//   //   for(let i=0;i<10000000;i++){
//   //     res+=i
//   //   }
//   //   return res
//   // },[])

//   let demo=()=>{
//     comsole.log("hiiiii")
//   }
//   let fun=useCallback(demo,[])

//   return (
//     <div>
//       {/* <h4>res:{data}</h4> */}
//       <h3>{count}</h3>
//       <button onClick={()=>{setCount(count+1)}}>add</button>
//       {/* <Child count={count}/> */}
//       {/* <Child fun={demo}/> */}
//       <Child fun={fun}/>
//     </div>
//   )
// }

// export default App


import React from 'react'

const App = () => {
  // console.log("hiiieeee")

  // localStorage.setItem("key","hieeee")

  let obj={
    id:1,
    name:"janhavi"
  }
  localStorage.setItem("key",JSON.stringify(obj))

  let data=localStorage.getItem("key")
  console.log(data,"dataaaa")

  
  return (
    <div>
      MemoDemo
    </div>
  )
}

export default App