import Layer from "../model/Layer";
import "./CakeLayer.css";

interface Props {
  cakeLayer: Layer;
}

const CakeLayer = ({ cakeLayer }: Props) => {
  return <li className="CakeLayer" style={}></li>;
};

export default CakeLayer;
