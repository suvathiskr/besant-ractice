import React from "react";
import UseFetchApi from "./UseFetchApi";

function CustomComp() {

    const { data } = UseFetchApi("https://fakestoreapi.com/products")

    return (
        <>
            <h1>products page</h1>
<div className="row">
            {data.map((ra)=>(


<div class="card" style={{width: "18rem"}}>
  <img src={ra.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{ra.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            ))}

</div>

        </>
    )
}

export default CustomComp