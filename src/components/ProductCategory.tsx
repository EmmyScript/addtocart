import { useContext,  } from "react";
import { ShopContext } from "../shop/ShopContext";


const APICATEGORY = [
  {
    id: 1,
    category: "All",
  },
  {
    id: 2,
    category: "Colths",
  },
  {
    id: 3,
    category: "Shoes",
  },
  {
    id: 4,
    category: "Books",
  },
];
export const ProductCategory = () => {
  const { handleCategory } = useContext(ShopContext);
 
  return (
    <>
      <div className="dropdown">
        <select 
          className="form-select"
          onChange={(e) => handleCategory(e.target.value)
            
          }
        
        >
          <option defaultValue={""}>Select category</option>
          {APICATEGORY.map((apicategorys) => (
            <option key={apicategorys.id}>{apicategorys.category}

            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ProductCategory
