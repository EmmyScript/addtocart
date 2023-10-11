import  { useState } from 'react'
import AppInput from './AppInput'
import axios from 'axios';
import ProductCategory from './ProductCategory';


export const UpdateModal = ({productObj, prodCategory}:any) => {

    const [classStatus, setClassStatus] = useState("");

    console.log(productObj.productName)

    const [allValue, setAllValue] = useState({
        productName: productObj.productName ? productObj.productName : "",
        price: productObj.price ? productObj.price : "" ,
        productImage: productObj.productImage ? productObj.productImage : "",
        thumbnail_image: productObj.thumbnail_image ? productObj.thumbnail_image : "",
        category: productObj.category ? productObj.category : "",
        quantity: productObj.quantity ? productObj.quantity : "",
        description: productObj.description ? productObj.description : "",
        rating: productObj.rating ? productObj.rating :"",
        numReviews: productObj.numReviews ? productObj.numReviews :"",
        size: productObj.size ? productObj.size :"",
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
    const handleValues = (e: any) => {
        const value = e.target.value;
        const name = e.target.name;
        const data = { ...allValue, [name]: value };
        setAllValue(data);
      }; 
      
      const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
          const result = await axios({
            url: `https://ecommerce-trading.onrender.com/api/products/update/${productObj._id}`,
            method: "put",
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
        } 
        catch (err) {
          console.log("No product info saved");
          setClassStatus("alert alert-danger");
        }
      };
  return (
    <div>

<div className="modal fade" id="updateModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      {classStatus !== "" && (
            <div className={classStatus}>
              {classStatus.split("-").includes("success")
                ? "Saved success"
                : "Not saved"}
            </div>
          )}
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
                    <ProductCategory />
                  </div>

                  <div className="col-md-6 mt-2">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
      </div>

    </div>
  </div>
</div>
    </div>
  )
}
