import React, { useState } from "react";
import "./BulbComponent.css";

export default function BulbComponent() {
  const [isOn, setIsOn] = useState(false); 


  const bulbImages = {
    off: "https://media.istockphoto.com/id/502789173/photo/light-bulb-concept.jpg?s=612x612&w=0&k=20&c=vJfSDuFJf_4UsQcUsdMNUfDkkNU6Bf9cTHF-n4-Zwvs=",
    on: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500https://media.istockphoto.com/id/603186796/photo/glowing-light-bulb-without-wires-on-black-background.jpg?s=612x612&w=0&k=20&c=3qJypAUmICNjKxXKcNHVsGf9C62mZz25JWO83IYPano=",
  };

  return (
    <div className="bulb-container">
      <h1>Bulb On/Off</h1>
      <div className="bulb">
      
        <img
          src={isOn ? bulbImages.on : bulbImages.off}
          alt={isOn ? "Bulb On" : "Bulb Off"}
          className="bulb-image"
        />
      </div>
      <div className="buttons">
    
        <button className="btn on-btn" onClick={() => setIsOn(true)}>
          Turn On
        </button>
        <button className="btn off-btn" onClick={() => setIsOn(false)}>
          Turn Off
        </button>
      </div>
    </div>
  );
}
