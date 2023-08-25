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
          <li className="layer-info" key={index}>
            <div>
              <p>Color: {item.color}</p>
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
