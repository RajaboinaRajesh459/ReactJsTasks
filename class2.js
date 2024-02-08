import React from "react";

class Bank2 extends React.Component{
    constructor(){
        super();
        console.log(this);
    }
    render(){
        const h2Style={color:'white',backgroundColor:'red'}
        return (
            <div>
                <h1>This is Bank2</h1>
                <h2 style={h2Style}>Name:{this.props.name} and Branch:{this.props.branch}</h2>
            </div>
        )
    }
}
export default Bank2;