import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

function GroceryListComp() {
    const [grocerydata, setgrocerydata] = useState([]);
    const [input, setinput] = useState("");

    const handlefetch = async () => {
        let res = await axios.get("http://localhost:3000/todoList")
        setgrocerydata(res.data)
    };

    useEffect(() => {
        handlefetch();
    }, []);

    const handleinput = (e) => {
        setinput(e.target.value);
    };

    const handlepost = async () => {
        let body = {
            grocery: input,
        };
        let post = await axios.post("http://localhost:3000/todoList", body);
        alert("successfully");
        handlefetch();
    };

    const handledelete = async (id) => {

        let da = await axios.delete(`http://localhost:3000/todoList/${id}`)
        handlefetch();
    };

    const handleedit = async (ix) => {
        let sa = prompt("enter product", grocerydata[ix].grocery)
        let body = {
            id: grocerydata[ix].id,
            grocery: sa
        }
        let ad = await axios.put(`http://localhost:3000/todoList/${grocerydata[ix].id}`, body)
        handlefetch();
    };
    return (
        <div>
            <h1>Grocery List</h1>
            <input onChange={handleinput} placeholder="Enter your Grocery" />
            <button onClick={handlepost}>submit</button>

            {grocerydata.map((da, i) => (
                <div key={i}>
                    {i + 1}.{da.grocery}
                    <br></br>
                    <span onClick={() => handleedit(i)}><MdEdit /></span>
                    <span onClick={() => handledelete(da.id)}><MdDeleteOutline /></span>
                </div>
            ))}
        </div>
    );
}

export default GroceryListComp
