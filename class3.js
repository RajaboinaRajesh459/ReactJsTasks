import React from "react";

import './class3.css'

class Bank3 extends React.Component{
    constructor(){
        super();
        console.log(this)
    }
    render(){
        return (
            <div>
                <h1>This Is Bank3</h1>
                <h2 className="h2Cont"> Name:{this.props.name} and Branch:{this.props.branch} Code:{this.props.pin}</h2>
            </div>
        )
    }
}
export default Bank3;