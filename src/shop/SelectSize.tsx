import { useContext } from "react";
import { ShopContext } from "./ShopContext";


const ESAYWEAR = [
  {
    size: "XS",
    id: 1,
  },
  {
    size: "S",
    id: 2,
  },
  {
    size:"ML",
    id:3,
  },
  {
    size:"L",
    id:4,
  },
  {
    size:"XL",
    id:5,
  },
  {
    size:"XXL",
    id:6,
  },
];

export const SelectSize = () => {
      
  const{handleSize, sizes} = useContext(ShopContext)
  
  return (
    <>
    <div className="row">
  <div className="col-md-3 col-3">
  <button className="btns btn-secondary mt-2 btn-lg btn-row-2 " onClick={() =>
           handleSize("")} 
            >
            All 
          </button>
  </div>
      {ESAYWEAR.map((easy) => (
        <div className="col-md-3 col-2">
        
          <button className="btns btn-secondary mt-2 btn-lg btn-row-2 " key={easy.id} onClick={() =>
           handleSize(easy.size)} 
           style={{backgroundColor: sizes== easy.size ? 'red' : ''}}>
            {easy.size}
          </button>
        
        </div>
      ))}
     
    </div>
    <div className="col-md-2">
    <button className="btn btn-danger mt-1 btn-lg mb-2 " onClick={() => handleSize([])}>delete</button>
    </div>
    </>
  );
};

export default SelectSize;
