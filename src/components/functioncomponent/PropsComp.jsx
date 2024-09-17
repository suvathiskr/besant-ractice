import React, { useState } from "react";

function PropsComp(props) {

    const [datas,setdatas] = useState(props.names)
    return (

        <div>
            {datas.map((a) => (
                <h1>{a}</h1>
            ))}

        </div>
    )

}

export default PropsComp