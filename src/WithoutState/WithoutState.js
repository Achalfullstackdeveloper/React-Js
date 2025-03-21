import React, { useState } from "react";
import "./WithoutState.css";

export default function WithoutState() {
  const [fruit, setFruit] = useState("apple");

  const handleFruitChange = {
    apple:
      "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg",
    banana:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5sNqYdkUyV2r8o7eXJlQYYziU2H0YJPZzDQ&s",
    orange:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-zatL0EJL1r2HlAZ2VnL-QjfoU0ievTSnw&s",
  };

  const onSelectChange = (item) => {
    setFruit(item.target.value);
  };

  return (
    <div>
      <h1>select a fruit</h1>
      <select className="fruits-select" onChange={onSelectChange}>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
      <h2>You Selected {fruit}</h2>
      <img
        src={handleFruitChange[fruit]}
        alt={fruit}
        className="fruit-image"
      />
    </div>
  );
}
