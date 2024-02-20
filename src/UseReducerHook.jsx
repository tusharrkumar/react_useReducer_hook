import { useReducer } from 'react'

const counterReducer = (state,action) => {
    switch (action.type){
        case "inc":
            return state + 1;
        case "dec":
            return state - 1;
        case "reset":
            return 0;
        default:
            return 0;
    }
}

function UseReducerHook() {
    const[state, dispatch] = useReducer(counterReducer,0)
    return (
        <>
            <h1>useReducer() hook</h1>

            <h1>{state}</h1>
            <div>
                <button onClick={() => dispatch({type:"inc"})} style={{margin : "5px"}}>+</button>
                <button onClick={() => dispatch({type:"dec"})} style={{margin : "5px"}}>-</button>
                <button onClick={() => dispatch({type:"reset"})} style={{margin : "5px"}}>Reset</button>
            </div>
        </>
    )
}

export default UseReducerHook