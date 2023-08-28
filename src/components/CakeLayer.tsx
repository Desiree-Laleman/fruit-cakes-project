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
    ></li>
  );
};

export default CakeLayer;
