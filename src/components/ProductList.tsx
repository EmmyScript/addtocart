import { useContext, useState } from "react";
import AppInput from "./AppInput";
import ApiCategory from "./ProductCategory";
import { ShopContext } from "../shop/ShopContext";
import axios from "axios";

export const ProductList = () => {
  const { prodCategory } = useContext(ShopContext);

  const [classStatus, setClassStatus] = useState("");

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
    e.preventDefault();
    try {
      const result = await axios({
        url: "https:ecommerce-trading.onrender.com/api/products/create",
        method: "post",
        data: formdata,
        headers: {
          "Content-Type": "application/json",
          Authorization: "secret-pin",
        },
      });

      if (!result) {
        setClassStatus("alert alert-danger");
        console.log("No product info saved");
      }
      console.log("Data saved");
      setClassStatus("alert alert-success");
    } catch (err) {
      console.log("No product info saved");
      setClassStatus("alert alert-danger");
    }
  };

  const handleValues = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    const data = { ...allValue, [name]: value };
    setAllValue(data);
  };

  console.log(prodCategory);



  return (
    <>
      <div className="productlist">
        <div className="container  text-black fs-5 p-2 mb-3">
          <h3 className="text-center mb-3 mt-2">Product Names</h3>
          {classStatus &&
                <div className="spinner-border text-warning text-center" role="status">
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
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <AppInput
                      type="text"
                      label="ProductName"
                      name="productName"
                      value={allValue.productName}
                      onChange={handleValues}
                    />
                  </div>
                  <div className="col-md-6">
                    <AppInput
                      type="number"
                      label="Price"
                      name="price"
                      value={allValue.price}
                      onChange={handleValues}
                    />
                  </div>
                  <div className="col-md-6">
                    <AppInput
                      type="text"
                      label="ProductImage"
                      name="productImage"
                      value={allValue.productImage}
                      onChange={handleValues}
                    />
                  </div>

                  <div className="col-md-6">
                    <AppInput
                      type="text"
                      label="ThumbNail image"
                      name="thumbnail_image"
                      value={allValue.thumbnail_image}
                      onChange={handleValues}
                    />
                  </div>

                  <div className="col-md-6">
                    <AppInput
                      type="text"
                      label="Quantity"
                      name="quantity"
                      value={allValue.quantity}
                      onChange={handleValues}
                    />
                  </div>
                  <div className="col-md-6">
                    <AppInput
                      type="text"
                      label="Description"
                      name="description"
                      value={allValue.description}
                      onChange={handleValues}
                    />
                  </div>
                  <div className="col-md-6">
                    <AppInput
                      type="text"
                      label="Rating"
                      name="rating"
                      value={allValue.rating}
                      onChange={handleValues}
                    />
                  </div>
                  <div className="col-md-6">
                    <AppInput
                      type="text"
                      label="NumReviews"
                      name="numReviews"
                      value={allValue.numReviews}
                      onChange={handleValues}
                    />
                  </div>
                  <div className="col-md-6">
                    <AppInput
                      type="text"
                      label="Size"
                      name="size"
                      value={allValue.size}
                      onChange={handleValues}
                    />
                  </div>
                  <div className="col-md-6">
                    <ApiCategory />
                  </div>

                  <div className="col-md-6 mt-2">
                    <button type="submit" className="btn btn-secondary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;