import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'

function FunComp2({course,version}){
    return (
        <div>
            <h1 className='"fw-bold"'>This is function 2</h1>
            <h2 className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">Course:{course} and Version:{version}</h2>
        </div>
    )
}
export default FunComp2;