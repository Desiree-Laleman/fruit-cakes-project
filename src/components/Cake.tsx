import Layer from "../model/Layer";
import "./Cake.css";
import CakeLayer from "./CakeLayer";

interface Props {
  cakeArray: Layer[];
}

const Cake = ({ cakeArray }: Props) => {
  return <div className="Cake">{/* <CakeLayer /> */}</div>;
};

export default Cake;
