import React from "react";

export default class LoopJSX extends React.Component {
  render() {
    const fruits = ["Apple", "Banana", "Orange"];
    return (
      <div style={{ backgroundColor: "lightgray", color: "black" }}>
        <h1>Fruits </h1>
        <ul>
          {fruits.map((item, index) => (
            <li>{item}</li>
          ))}
          {/* <li>Apple</li>
                <li>Banana</li>
                <li>Grapes</li> */}
        </ul>
      </div>
    );
  }
}
