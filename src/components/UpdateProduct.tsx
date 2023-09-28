import { useContext, useState } from "react";
import { ShopContext } from "../shop/ShopContext";
import { UpdateModal } from "./UpdateModal";



const UpdateProduct = () => {
  const { allProduct, productObj,handleClick } = useContext(ShopContext);


  const [update, setUpdate] = useState({
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

  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
      <h1 className="produdtlist text-center"><b>Product List</b></h1>
    <table className="table table-responsive">   
      <thead>
        <tr>
          <th>ProductImage</th>
          <th>ProductName</th>
          <th>Price</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Description</th>
          <th>numReviews</th>
          <th>Size</th>
          <th>Option</th>
        </tr>
      </thead>
    <tbody>
      
        {
          allProduct.map((val:any)=>(
            <tr key={val._id}>
              <td><img src={val.productImage} height={30} width={30}/></td>
              <td>{val.productName}</td>
              <td>{val.price}</td>
              <td>{val.category}</td>
              <td>{val.quantity}</td>
              <td>{val.description}</td>
              <td>{val.numReviews}</td>
              <td>{val.size}</td>
              <td>
                <button className="btn btn-danger"
                 data-bs-toggle="modal" data-bs-target="#updateModal"
                onClick={()=>handleClick(val)}
                >Update</button>
              </td>
            </tr>
         
          ))
        }
    
    </tbody>
      </table>
      </div>
      <div className="col-md-2"></div>
      </div>
      <UpdateModal productObj={productObj}/>
      </div>
      
  )
}

export default UpdateProduct