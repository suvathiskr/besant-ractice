import React, { useState } from "react";

function ApiCall() {

    const [apidata, setapidata] = useState([]);
    const handlefetch = async () => {

        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();

        setapidata(data);
    }


    const handlefetchdsfds = async () => {

        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();

        setapidata(data);
    }

    return (
        <>
            <h1>Api Call</h1>
            <button onClick={handlefetch}>Click</button>
            {apidata.map((aa) => (
                <div >
                    <h3>{aa.title}</h3>
                    <h3>{aa.price}</h3>
                    <img height={200} width={200} src={aa.image} />
                </div>
            ))}
        </>
    )
}
export default ApiCall