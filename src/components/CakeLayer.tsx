import Layer from "../model/Layer";
import "./CakeLayer.css";

interface Props {
  layer: Layer;
}

const CakeLayer = ({ layer }: Props) => {
  return (
    <li
      className="CakeLayer"
      style={{
        listStyle: "none",
        backgroundColor: layer.color,
        height: layer.height,
        width: layer.width,
      }}
    ></li>
  );
};

export default CakeLayer;
