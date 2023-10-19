import  { useContext, } from 'react'
import AppInput from './AppInput'

import ProductCategory from './ProductCategory';
import { FormProvider, useForm } from 'react-hook-form';
import { ShopContext } from '../shop/ShopContext';


export const UpdateModal = () => {
  const{handleUpdateProduct,productObj, classStatus } = useContext(ShopContext)

const methods = useForm();
const formActualData =(data: any) => {
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

  console.log(productObj.productName)

  /*
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
  */

  console.log(formdata)
   const url: string =  `https://ecommerce-trading.onrender.com/api/products/update/${productObj._id}`
  handleUpdateProduct(formdata, url)
}

    //const [classStatus, setClassStatus] = useState("");

   // console.log(productObj.productName)
/*
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

      */
  
  
  
      return (
    <div>

<div className="modal fade" id="updateModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Update product emmy</h1>
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
                      required= {true}

                    
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
      </div>

    </div>
  </div>
</div>
    </div>
  )
}
