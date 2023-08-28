import Layer from "../model/Layer";
import "./Cake.css";
import CakeLayer from "./CakeLayer";

interface Props {
  cakeArray: Layer[];
}

const Cake = ({ cakeArray }: Props) => {
  return (
    <div className="Cake">
      <div className="cake-stand" />
      <ul>
        {cakeArray.map((item, index) => (
          <CakeLayer
            layer={item}
            key={index}
            zIndex={cakeArray.length - index}
          />
        ))}
      </ul>
    </div>
  );
};

export default Cake;
