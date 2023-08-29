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
      <h2>Layer Details</h2>
      <ul className="LayerBuilder">
        {cakeArray.map((item, index) => (
          <li className="layer-info" key={index} style={{ listStyle: "none" }}>
            <div id="colorContainer">
              <p>
                Flavor:{" "}
                {item.color === "#fff"
                  ? "Vanilla"
                  : item.color === "#73DBF0"
                  ? "Blueberry"
                  : item.color === "#FBAA60"
                  ? "Orange"
                  : item.color === "#F6E199"
                  ? "Lemon Meringue"
                  : item.color === "#E37383"
                  ? "Watermelon"
                  : item.color === "#B57EDC"
                  ? "Grape"
                  : item.color === "#C7B6DC"
                  ? "Lavender"
                  : item.color === "#FFE5B4"
                  ? "Banana Cream Pie"
                  : item.color === "#D0F0C0"
                  ? "Mint"
                  : item.color === "#EE9EB8"
                  ? "Raspberry"
                  : item.color === "#84563C"
                  ? "Chocolate"
                  : ""}
              </p>
              <div id="decorationContainer">
                <p>
                  Decoration:{" "}
                  {item.decoration ===
                  "http://localhost:3000/assets/strawberry-vine.png"
                    ? "Strawberry Vine"
                    : item.decoration ===
                      "http://localhost:3000/assets/grape-vine.png"
                    ? "Grape Vine"
                    : item.decoration ===
                      "http://localhost:3000/assets/citrus-fruits.png"
                    ? "Citrus Fruits"
                    : "None"}
                </p>
              </div>
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
            <div className="button-container">
              <button onClick={() => deleteLayer(index)}>DELETE</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LayerBuilder;
