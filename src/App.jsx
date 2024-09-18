// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

{/* <BrowserRouter> */ }
{/* <h1>suvathi</h1>
      <AddCart />

      <MovieList> */}
{/* <ApiCall/> */ }

{/* <InputComp/> */ }

{/* { <ApiCallWithUseEffect name={"suvathi"}/> } */ }

{/* <BdProject/> */ }

{/* <GroceryListComp/>  */ }

{/* <NameChange/> */ }

{/* <ListRender/> */ }


{/* 
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      <Link to="about">About</Link>
    

      <Routes>

        <Route path="/" element ={<HomeComp />}/>

        <Route path="/product" element ={<ProductComp />}/>

        <Route path="/about" element ={<AboutComp />}/>

      </Routes>

    </BrowserRouter> */}




import React, { useState } from "react";
// import AddCart from "./components/AddCart";
// import MovieList from "./components/movielist";
// import ApiCall from "./components/functioncomponent/ApiCall";
// import ApiCallWithUseEffect from "./components/functioncomponent/ApiCallWithUseEffect";
// import InputComp from "./components/functioncomponent/InputComp";
// import BdProject from "./components/functioncomponent/BdProject";
// import HomeComp from "./components/router/HomeComp";
// import ProductComp from "./components/router/ProductComp";
// import AboutComp from "./components/router/AboutComp";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import GroceryListComp from "./components/functioncomponent/GroceryListComp";
// import NameChange from "./components/FuncComponent/NameChange";
// import ListRender from "./components/FuncComponent/ListRender";
// import UseReducer from "./components/functioncomponent/UseReducer";
import ApiCall from "./components/functioncomponent/ApiCall";
import CustomComp from "./components/functioncomponent/CustomComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';


 


function App() {

  return (
    <div>

      {/* <UseReducer /> */}
      {/* 
      <ApiCall /> */}

      <CustomComp />
    </div>
  )
}
export default App


