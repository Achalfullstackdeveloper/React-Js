import React from "react";
import"./ProfileImage.css";
import MyImage from "../Assets/Image/image3.jpg";

export default class DynamicImage extends React.Component{
    render(){
        return(
            <div>
                <img src ={MyImage} alt={"Dynamic Image"} />
            </div>
        );
    }
}