import Layer from "../model/Layer";
import "./CakeLayer.css";

interface Props {
  layer: Layer;
  zIndex: number;
}

const CakeLayer = ({ layer, zIndex }: Props) => {
  return (
    <li
      className="CakeLayer"
      style={{
        listStyle: "none",
        backgroundColor: layer.color,
        height: layer.height,
        width: layer.width,
        zIndex: zIndex,
      }}
    >
      {layer.decoration && <img src={layer.decoration} alt="decoration" />}
    </li>
  );
};

export default CakeLayer;
