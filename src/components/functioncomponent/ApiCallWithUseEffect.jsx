import React, { useEffect, useState } from "react";
import PropsComp from "./PropsComp";

function ApiCallWithUseEffect(props) {

    const [count, setcount] = useState(0)
    const handlecount = () => {

        setcount(count + 1)
    }

    useEffect(() => {
        console.log("suvathi");

        return () => {
            console.log("logged out")
        }

    }, [count])
    return (

        <>

{/* <PropsComp names ={["suvathi","kavi","giri"]} /> */}


            <h1>ApiCallWithUseEffect</h1>


            <h2>{props.name}</h2>
            <button onClick={handlecount}>add-{count}</button>
        </>
    )
}


export default ApiCallWithUseEffect