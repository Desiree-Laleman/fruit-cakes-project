import { link } from "fs";
import Layer from "../model/Layer";
import "./LayerBuilder.css";

interface Props {
  cakeArray: Layer[];
}

const LayerBuilder = ({ cakeArray }: Props) => {
  return (
    <>
      <h2>Layer Information</h2>
      <ul className="LayerBuilder">
        {cakeArray.map((item) => (
          <li className="layer-info">
            <div>
              <p>Color: {item.color}</p>
            </div>
            <div>
              <p>Height: {item.height}</p>
              <p>Width: {item.width}</p>
            </div>
            <button>DELETE</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LayerBuilder;
