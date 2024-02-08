import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'

const FuncComp1=(props)=>{
    return (
        <div>
            <h1 className="container text-primary" >This is Function1</h1>
            <h2>{props.name}</h2>
        </div>
    )
}
export default FuncComp1;