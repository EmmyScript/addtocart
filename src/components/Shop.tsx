import { useContext } from "react";
import Product from "../shop/Product";
import SelectSize from "../shop/SelectSize";
import { SHOPITEMS } from "../shop/ShopItems";
import { ShopContext } from "../shop/ShopContext";
import Category from "../shop/Category";

export const Shop = () => {
  const { sizes, category, search } = useContext(ShopContext);
  console.log(search);

  const shopProducts =
    sizes !== ""
      ? SHOPITEMS.filter((val: any) => val.size === sizes)
      : category !== ""
      ? SHOPITEMS.filter((val: any) => val.classob === category)
      : search !== ""
      ? SHOPITEMS.filter((val: any) =>
          val.productName
            ?.toLowerCase()
            .includes(search?.toString().toLowerCase)
        )
      : SHOPITEMS;

  return (
    
    <div className="container-fliud">
     
      <div className="shop-title text-center">
        <h1>shopping</h1>
      </div>
      <div className="row">
        <div className="col-md-2 fs-5">
       
          <h2>Sizes:</h2>
          <SelectSize />

          <h3>category:</h3>
          <Category />
        </div>
      
       
        <div className="col-md-10">
        <div className="row">
         
            {shopProducts?.map((shopitems) => (
              <Product data={shopitems} key={shopitems.id} />
            ))}
          </div>
        </div>
        </div>
      </div>
    
  );
};

export default Shop;
