import React, { useReducer } from 'react'

const Usereducer = () => {
    function reducer(state,action){
        if(action.type=="dec"){
            return state-1
        }
        else if(action.type=="reset"){
            return 0
        }
        else if(action.type=="inc"){
            return state+1
        }
        else{
            return state
        }
    }
    let [state, dispatch]=useReducer(reducer,0)
  return (
    <div>
        Usereducer
        <h2>{state}</h2>
        <button onClick={()=>{dispatch({type:"dec"})}}>-</button>
        <button onClick={()=>{dispatch({type:"reset"})}}>reset</button>
        <button onClick={()=>{dispatch({type:"inc"})}}>+</button>
    </div>
  )
}

export default Usereducer