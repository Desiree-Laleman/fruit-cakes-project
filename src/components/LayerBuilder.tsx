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
            <div>
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
            <div>
              <p>Height: {item.height}</p>
              <p>Width: {item.width}</p>
            </div>
            <button onClick={() => deleteLayer(index)}>DELETE</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LayerBuilder;
