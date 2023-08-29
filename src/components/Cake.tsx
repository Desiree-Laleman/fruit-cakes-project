import Layer from "../model/Layer";
import "./Cake.css";
import CakeLayer from "./CakeLayer";

interface Props {
  cakeArray: Layer[];
  cakeHeight: number;
}

const Cake = ({ cakeArray, cakeHeight }: Props) => {
  console.log(cakeHeight);
  return (
    <div className="Cake">
      <div className="cake-stand" />
      <ul
        className={
          cakeHeight >= 25 ? "scale-desktop" : cakeHeight >= 12 ? "scale" : ""
        }
      >
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
