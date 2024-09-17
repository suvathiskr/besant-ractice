import React, { useReducer } from "react";

function UseReducer() {
    function arith(state, action) {
        if (action.type == "increment") {
            return { count: state.count + 1 };
        }
        if (action.type == "decrement") {
            return { count: state.count - 1 };
        }
        if (action.type == "reset") {
            return { count: 0 };
        }
    }

    const [state, dispatch] = useReducer(arith, { count: 0 })

    const handleadd = () => {
        dispatch({ type: "increment" })
    };
    const handlesub = () => {
        dispatch({ type: "decrement" })
    };
    const handlereset = () => {
        dispatch({ type: "reset" })
    };


    return (

        <>
            <h1>Count = {state.count}</h1>

            <button onClick={handleadd}>add</button>

            <button onClick={handlesub}>sub</button>

            <button onClick={handlereset}>reset</button>
        </>


    )
}



export default UseReducer