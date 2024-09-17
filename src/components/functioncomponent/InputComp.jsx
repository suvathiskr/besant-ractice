import React, { useState } from "react";

function InputComp() {


    const [inputname, setinputname] = useState("")
    const [inputemail, setinputemail] = useState("")
    const [inputmobno, setinputmobno] = useState("")
    const [inputpassword, setinputpassword] = useState("")

    const [islog, setislog] = useState(false)


    const handlename = (e) => {
        setinputname(e.target.value)
    }

    const handleemail = (e) => {
        setinputemail(e.target.value)
    }

    const handlemobno = (e) => {
        setinputmobno(e.target.value)
    }

    const handlepassword = (e) => {
        setinputpassword(e.target.value)
    }


    const handlelogout = () => {
        setislog(true)
    }



    return (

        <>


            {!islog ?

                <div>
                    <input onChange={handlename} placeholder="Enter your name:" />
                    <br></br>
                    <br></br>
                    <input onChange={handleemail} placeholder="Enter your Email:" />
                    <br></br>
                    <br></br>
                    <input onChange={handlemobno} placeholder="Enter Mobile No:" />
                    <br></br>
                    <br></br>
                    <input type="password" onChange={handlepassword} placeholder="Enter password:" />
                    <br></br>
                    <br></br>
                    <button onClick={handlelogout}>submit</button>
                </div>

                :
                <div>
                    <h1>Name : {inputname}</h1>
                    <h1>Email :{inputemail}</h1>
                    <h1>Mob No :{inputmobno}</h1>
                    <h1>Password :{inputpassword}</h1>
                </div>
            }
        </>


    )
}



export default InputComp