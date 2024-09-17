import React, { useState } from "react";

function NameChange() {

    const [name, setname] = useState("suvathi")
    const handleclick = () => {

        if (name == "suvathi") {
            setname("siva")
        }
        else {
            setname("suvath")
        }
    }
    return (
  
        <>
            <h1>Name : {name}</h1>
            <button onClick={handleclick}>Change</button>
        </>
    )
}

export default NameChange