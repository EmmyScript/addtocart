import { useContext, useEffect, useState } from "react";
import Product from "../shop/Product";
import SelectSize from "../shop/SelectSize";
import { SHOPITEMS } from "../shop/ShopItems";
import { ShopContext } from "../shop/ShopContext";
//import Category from "../shop/Category";
import axios from "axios";
import ApiCategory, { ProductCategory } from "./ProductCategory";



export const Shop = () => {
  const { sizes, category, search,allProduct } = useContext(ShopContext);





  console.log(allProduct)

  const shopProducts =
    sizes !== ""
      ? allProduct?.filter((val: any) => val.size === sizes)
      : category !== ""
      ? allProduct?.filter((val: any) => val.classob === category)
      : search !== ""
      ? allProduct?.filter((val: any) =>
          val.productName
            ?.toLowerCase()
            .includes(search?.toString().toLowerCase)
        )
      : allProduct;

  return (
    
    <div className="container-fliud">
     
      <div className="shop-title text-center">
        <h1>shopping</h1>
      </div>
      <div className="row">
        <div className="col-md-2  fs-5">
       
          <h2>Sizes:</h2>
          <SelectSize />

          <h3>category:</h3>
          
          <ProductCategory />
        </div>
      
       
        <div className="col-md-10">
        <div className="row">
         
            {shopProducts?.map((shopitems:any) => (
              <Product data={shopitems} key={shopitems._id} />
            ))}
          </div>
        </div>
        
        
        </div>
      </div>
    
  );
};

export default Shop;
