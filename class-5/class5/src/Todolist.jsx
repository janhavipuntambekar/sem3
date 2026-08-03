import React, { useReducer } from 'react'

const Todolist = () => {
    let data={
        input:"",
        list:[]
    }
    function reducer(state, action){
        if(action.type=="input"){
            return{
                ...state,
                input:action.payload
            }
        }
        else if(action.type=="add"){
            return{
                ...state,
                list:[...state.list, state.input],
                input:""
            }
        }
        else if(action.type=="del"){
            return{
                ...state,
                list:state.list.filter((_,index)=>index!=action.payload)
            }
        }
    }
    let [state, dispatch]=useReducer(reducer, data)
  return (
    <div>
        <input value={state.input} onChange={(e)=>dispatch({type:"input", payload:e.target.value})}/>
        <button onClick={()=>dispatch({type:"add"})}>add</button>
        
        {state.list.map((a,index)=>{
            return(<>
            <li onClick={()=>dispatch({type:"del", payload:index})}>{a}</li>
            </>)
        })}
    </div>
  )
}

export default Todolist