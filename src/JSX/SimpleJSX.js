import React from "react";

export default class SimpleJSX extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:"lightgray", color:"black"}}>
               <h1>Hello World </h1>
               <p>Welcome to react</p>
            </div>
        );
    }
}