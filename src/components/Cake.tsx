import Layer from "../model/Layer";
import "./Cake.css";
import CakeLayer from "./CakeLayer";

interface Props {
  cakeArray: Layer[];
  cakeHeight: number;
}

const Cake = ({ cakeArray, cakeHeight }: Props) => {
  return (
    <div className="Cake">
      <div className="cake-stand" />
      {/* {cakeHeight >= 30 && style={scale: 0.5} */}
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
