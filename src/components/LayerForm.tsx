import { FormEvent, useState } from "react";
import "./LayerForm.css";
import Layer from "../model/Layer";
import strawberry from "../images/strawberry-vine.png";
import citrus from "../images/citrus-fruits.png";
import grape from "../images/grape-vine.png";

interface Props {
  setHidden: (boolean: boolean) => void;
  addLayer: (layer: Layer) => void;
}

const LayerForm = ({ setHidden, addLayer }: Props) => {
  const [color, setColor] = useState("");
  const [decoration, setDecoration] = useState("");
  const [height, setHeight] = useState("0.5");
  const [width, setWidth] = useState("1");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    addLayer({
      color,
      decoration,
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
          Pick A Flavor
        </option>
        <option value="#FFE5B4">Banana Cream Pie</option>
        <option value="#4F86F7">Blueberry</option>
        <option value="#84563C">Chocolate</option>
        <option value="#B57EDC">Grape</option>
        <option value="#C7B6DC">Lavender</option>
        <option value="#F6E199">Lemon Meringue</option>
        <option value="#D0F0C0">Mint</option>
        <option value="#FBAA60">Orange</option>
        <option value="#EE9EB8">Raspberry</option>
        <option value="#E37383">Watermelon</option>
        <option value="#fff">Vanilla</option>
      </select>
      <p>
        *Please select a height of 4.5 or more to add decoration (5.5 for
        Citrus)
      </p>
      {Number(height) >= 4.5 && (
        <select
          name="decoration"
          id="decoration"
          value={decoration}
          onChange={(e) => setDecoration(e.target.value)}
        >
          <option value="" disabled>
            Optional Decoration
          </option>
          <option value={strawberry}>Strawberry Vine</option>
          <option value={grape}>Grape Vine</option>
          {Number(height) >= 5.5 && (
            <option value={citrus}>Citrus Fruits</option>
          )}
        </select>
      )}
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
