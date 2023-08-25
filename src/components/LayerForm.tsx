import { FormEvent, useState } from "react";
import "./LayerForm.css";
import Layer from "../model/Layer";

interface Props {
  setHidden: (boolean: boolean) => void;
  addLayer: (layer: Layer) => void;
}

const LayerForm = ({ setHidden, addLayer }: Props) => {
  const [color, setColor] = useState("");
  const [height, setHeight] = useState("0.5");
  const [width, setWidth] = useState("1");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    addLayer({
      color,
      height: Number(height) * 40,
      width: Number(width) * 40,
    });
    setColor("");
    setHeight("0.5");
    setWidth("1");
  };

  return (
    <form
      className="LayerForm"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <select
        required
        name="color"
        id="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="" disabled>
          Pick a color
        </option>
        <option value="#73DBF0">Blue</option>
        <option value="#B57EDC">Purple</option>
        <option value="#FFE5B4">Yellow</option>
        <option value="#D0F0C0">Green</option>
        <option value="#fff">White</option>
        <option value="#EE9EB8">Pink</option>
        <option value="#84563C">Brown</option>
      </select>
      <label htmlFor="height">Height: {Number(height).toFixed(1)}</label>
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
      <div className="scButtonContainer">
        <button id="saveButton">Save</button>
        <button
          id="cancelButton"
          type="button"
          onClick={() => setHidden(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default LayerForm;
