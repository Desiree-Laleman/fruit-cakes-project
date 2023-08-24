import { useState } from "react";
import "./LayerForm.css";

const LayerForm = () => {
  const [color, setColor] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");

  return (
    <form
      className="LayerForm"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(height, width);
      }}
    >
      <select
        name="color"
        id="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="" disabled>
          Pick a color
        </option>
        <option value="blue">Blue</option>
        <option value="purple">Purple</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="white">White</option>
        <option value="pink">Pink</option>
        <option value="brown">Brown</option>
      </select>
      <label htmlFor="height">Height: {height}</label>
      <input
        type="range"
        min="0.5"
        step="0.5"
        max="10"
        value={height}
        className="slider"
        id="height"
        onChange={(e) => setHeight(e.target.value)}
      />

      <label htmlFor="width">Width: {width}</label>
      <input
        type="range"
        min="1"
        max="10"
        value={width}
        className="slider"
        id="width"
        onChange={(e) => setWidth(e.target.value)}
      />

      <button>Save</button>
    </form>
  );
};

export default LayerForm;
