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

  const handelSubmit = (e: FormEvent): void => {
    e.preventDefault();
    addLayer({ color, height: Number(height), width: Number(width) });
    setColor("");
    setHeight("0.5");
    setWidth("1");
  };

  return (
    <form
      className="LayerForm"
      onSubmit={(e) => {
        handelSubmit(e);
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

      <button>Save</button>
      <button type="button" onClick={() => setHidden(false)}>
        Cancel
      </button>
    </form>
  );
};

export default LayerForm;
