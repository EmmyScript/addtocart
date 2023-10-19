import { useContext} from "react";
import { ShopContext } from "../shop/ShopContext";
import { UpdateModal } from "./UpdateModal";



const UpdateProduct = () =>{
  const { allProduct, productObj, handleClick,handleDelete } = useContext(ShopContext);


  const url = "https://ecommerce-trading.onrender.com/api/products/delete"




  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8  ">
      <h1 className="updateproductlist text-center"><b>Update Product List </b></h1>
      
    <table className="table table-responsive">   
      <thead>
        <tr>
          <th className="table-primary">ProductImage</th>
          <th className="table-secondary">ProductName</th>
          <th className="table-info">Price</th>
          <th className="table-success">Category</th>
          <th className="table-danger">Quantity</th>
          <th className="table-cell">Description</th>
          <th className="table-warning">numReviews</th>
          <th className="table-dark">Size</th>
          <th className="table-secondary">Option</th>
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
              <td className="d-flex justify-content-between">
                <button className="btn btn-danger"
                 data-bs-toggle="modal" data-bs-target="#updateModal"
                onClick={()=>handleClick(val)}
                >Update</button>

              <button className="btn btn-danger" onClick={()=>handleDelete(url,val._id)}>
                  Delete
                </button>
              </td>
            
            </tr>
         
          ))
        }
    
    </tbody>
      </table>
      
      </div>
    
      </div>
      <UpdateModal />
      </div>
      
  )
}

export default UpdateProduct;


//< updatemodal  productOBject={productobject}