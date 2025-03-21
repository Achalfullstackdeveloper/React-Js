import React from "react";

export default class ConditionalJSX extends React.Component{
    render(){
        let greeting ="Hello World";
        let date = new Date();
        let hours = date.getHours();
        let minutes =date.getMinutes();
        let seconds = date.getSeconds();
        if(hours<12){
            greeting ="Good Morning";
        }
        else if(hours <16){
            greeting = "Good Afternoon";
        }
        else if(hours < 20){
            greeting =" Good Evening";
        }
        else{
            greeting = "Good Night";
        }
        return (
            <div style={{backgroundColor:"lightgray",color : "black"}}>
            <h1>{greeting}</h1>
            <p>{hours}:{minutes}:{seconds}</p>
            </div>



        );
    }
} 