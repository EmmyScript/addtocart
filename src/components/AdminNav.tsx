

import ProductList from "./ProductList"
import UpdateProduct from "./UpdateProduct"


const AdminNav = () => {
  return (
    <>
    <div className="container-fluid">
  
      <div className="adminnav">
    <ProductList />
    <UpdateProduct/>
    
       
    </div>
   </div>
    </>
  )
}

export default AdminNav