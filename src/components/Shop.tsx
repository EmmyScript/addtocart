import { useContext, useEffect, useState } from "react";
import Product from "../shop/Product";
import SelectSize from "../shop/SelectSize";
import { SHOPITEMS } from "../shop/ShopItems";
import { ShopContext } from "../shop/ShopContext";
//import Category from "../shop/Category";
import axios from "axios";
import  { ProductCategory } from "./ProductCategory";



export const Shop = () => {
  const { sizes, category, search,allProduct,loading } = useContext(ShopContext);


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
        {
        loading &&  <div className="container h-100 w-100 text-center" style={{flex:1}}>
          <h4 className="alert alert-info text-center fs-3 fw-bolder">Loading</h4>
        </div>
      }
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
