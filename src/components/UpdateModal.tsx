import { useContext, useState } from "react";
import AppInput from "./AppInput";

import ProductCategory from "./ProductCategory";
import { FormProvider, useForm } from "react-hook-form";
import { ShopContext } from "../shop/ShopContext";
import { Button, Modal } from "react-bootstrap";


export const UpdateModal = ({ tableData, showModal, setShowModal }: any) => {
  const { handleUpdateProduct, classStatus } = useContext(ShopContext);

  
  const [] = useState({
    productName: tableData?.productName? tableData?.productName : "",
    price: tableData?.price ? tableData?.price : "",
    productImage: tableData?.productImage ? tableData?.productImage : "",
    thumbnail_image: tableData?.thumbnail_image ? tableData?.thumbnail_image : "",
    category: tableData?.category ? tableData?.category : "",
    quantity: tableData?.quantity ? tableData?.quantity : "",
    description: tableData?.description ? tableData?.description : "",
    rating: tableData?.rating ? tableData?.rating : "",
    numReviews: tableData?.numReviews ? tableData?.numReviews : "",
    size: tableData?.size ? tableData?.size : "",
  });

  

  const methods = useForm();
  const formActualData = (data: any) => {
    const formdata = {
      productName: data.productName,
      price: data.price,
      productImage: data.productImage,
      thumbnail_image: data.thumbnail_image,
      category: ProductCategory,
      quantity: data.quantity,
      description: data.description,
      rating: data.rating,
      numReviews: data.numReviews,
      size: data.size,
    };

    

    console.log(formdata);
    const url: string = `https://ecommerce-trading.onrender.com/api/products/update/${tableData._id}`;
    handleUpdateProduct(formdata, url);
  };

  const handleClose = () => {
    setShowModal(!showModal);
    // tableData = {}
  };
  console.log(tableData);


  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                   // value={allValue?.productName}
              
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
                    required={true}
                  />
                </div>

                <div className="col-md-6">
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
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
