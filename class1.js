import React from "react";

class Bank1 extends React.Component{
    constructor(){
        super();
        console.log(this);
    }
    render(){
        return(
            <div>
                <h1>This Is Bank1</h1>
                <h2 style={{color:'white',backgroundColor:'black'}}>{this.props.name}</h2>
            </div>
        )
    }
}
export default Bank1;