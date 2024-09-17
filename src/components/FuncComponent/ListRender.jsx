import React, { useState } from "react";

function ListRender() {

    const empdetails = [
        {
            name: "suvathi",
            id: 123,
            course: "react",
        },
        {
            name: "kavi",
            id: 456,
            course: "python",

        },
        {
            name: "arul",
            id: 678,
            course: "angular",
        },
        {
            name: "raji",
            id: 789,
            course: "nodejs",
        },
        {
            name: "abi",
            id: 912,
            course: "datascience",
        }

    ]
    const [emp, setemp] = useState(empdetails)
    return (
        <>
            <h1>List</h1>
            <ol>
                {emp.map((sa) => (
                    <li>
                        {sa.name} - {sa.id} - {sa.course}
                    </li>
                ))}
            </ol>
        </>
    )
}

export default ListRender