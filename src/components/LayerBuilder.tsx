import { useState } from "react";
import Layer from "../model/Layer";
import "./LayerBuilder.css";

interface Props {
  cakeArray: Layer[];
  deleteLayer: (index: number) => void;
}

const LayerBuilder = ({ cakeArray, deleteLayer }: Props) => {
  return (
    <>
      <h2>Layer Information</h2>
      <ul className="LayerBuilder">
        {cakeArray.map((item, index) => (
          <li className="layer-info" key={index} style={{ listStyle: "none" }}>
            <div id="colorContainer">
              <p>
                Color:{" "}
                {item.color === "#fff"
                  ? "White"
                  : item.color === "#73DBF0"
                  ? "Blue"
                  : item.color === "#B57EDC"
                  ? "Purple"
                  : item.color === "#FFE5B4"
                  ? "Yellow"
                  : item.color === "#D0F0C0"
                  ? "Green"
                  : item.color === "#EE9EB8"
                  ? "Pink"
                  : item.color === "#84563C"
                  ? "Brown"
                  : ""}
              </p>
            </div>
            <div id="heightWidthContainer">
              <div>
                <label htmlFor="height">
                  Height: {Number(item.height / 40).toFixed(1)}
                </label>
                <input
                  type="range"
                  min="0.5"
                  step="0.5"
                  max="10"
                  value={item.height / 40}
                  className="slider"
                />
              </div>
              <div>
                <label htmlFor="width">
                  Width: {(item.width / 40).toFixed(1)}
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={item.width / 40}
                  className="slider"
                />
              </div>
            </div>
            <button onClick={() => deleteLayer(index)}>DELETE</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LayerBuilder;
