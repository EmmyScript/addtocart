import { useContext, useState } from "react";
import AppInput from "./AppInput";
import{ ProductCategory } from "./ProductCategory";
import { ShopContext } from "../shop/ShopContext";
import { FormProvider, useForm } from "react-hook-form";



export const ProductList = () => {
  const { prodCategory, handleCreateProduct,classStatus, loading} = useContext(ShopContext);

  const methods = useForm()
const formActualData = (data: any) =>{
console.log(data)
const url:string =  "https:ecommerce-trading.onrender.com/api/products/create"
handleCreateProduct(data, url)
}

/*
  const [allValue, setAllValue] = useState({
    productName: "",
    price: "",
    productImage: "",
    thumbnail_image: "",
    category: "",
    quantity: "",
    description: "",
    rating: "",
    numReviews: "",
    size: "",
  });

  const formdata = {
    productName: allValue.productName,
    price: allValue.price,
    productImage: allValue.productImage,
    thumbnail_image: allValue.thumbnail_image,
    category: prodCategory,
    quantity: allValue.quantity,
    description: allValue.description,
    rating: allValue.rating,
    numReviews: allValue.numReviews,
    size: allValue.size,
  };

  const handleSubmit = async (e: any) => {

    const url:string =  "https:ecommerce-trading.onrender.com/api/products/create"
    e.preventDefault();
    handleCreateProduct(formdata,url)
  };


  const handleValues = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    const data = { ...allValue, [name]: value };
    setAllValue(data);
  };

 
*/

console.log(prodCategory);


  return (
    <>
      <div className="productlist">
        <div className="container   fs-5  mb-3">
          
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8  p-4 bg-dark text-white fs-60">


            <h3 className="text-center mb-3 mt-2">Product Names</h3>
          {loading &&
                <div className="spinner-row text-warning text-center" role="status">
                <span className="sr-only">Loading...</span>
              </div>
          }
          {classStatus !== "" && (
            <div className={classStatus}>
              {classStatus.split("-").includes("success")
                ? "Saved success"
                : "Not saved"}
            </div>
          )}

              <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(formActualData)}>
                <div className="row">
                  <div className="col-md-6">
                    <AppInput
                      type="text"
                      label="ProductName"
                      name="productName"
                      required={true}
                      
                    />
                  </div>
                  <div className="col-md-6">
                    <AppInput
                      type="number"
                      label="Price"
                      name="price"
                      required={true}
                    />
                  </div>
                  <div className="col-md-6">
                    <AppInput
                      type="text"
                      label="ProductImage"
                      name="productImage"
                      required={true}

                    />
                  </div>

                  <div className="col-md-6">
                    <AppInput
                      type="text"
                      label="ThumbNail image"
                      name="thumbnail_image"
                      required= {true}
                    />
                  </div>
                  <div className="col-md-6 mb-12">
                    <label className = "form-label">Category</label>
                  <ProductCategory />
                  </div>

                  <div className="col-md-6">
                    <AppInput
                      type="text"
                      label="Quantity"
                      name="quantity"
                      required={true}
                    />
                  </div>
                  <div className="col-md-6">
                    <AppInput
                      type="text"
                      label="Description"
                      name="description"
                      required={true}
                    />
                  </div>
                  <div className="col-md-6">
                    <AppInput
                      type="text"
                      label="Rating"
                      name="rating"
                      required={true}
                    />
                  </div>
                  <div className="col-md-6">
                    <AppInput
                      type="text"
                      label="NumReviews"
                      name="numReviews"
                      required={true}
                    />
                  </div>
                  <div className="col-md-6">
                    <AppInput
                      type="text"
                      label="Size"
                      name="size"
                      required={true}
                    />
                  </div>
                 
              
                  <div className="col-md-6 mt-2">
                    <button type="submit" className="btn btn-secondary">
                      Submit
                    </button>
                    
                  </div>
                </div>
              </form>

              </FormProvider>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default ProductList;
