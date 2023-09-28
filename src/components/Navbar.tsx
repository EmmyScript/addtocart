import { Link } from "react-router-dom";
import {FaShoppingCart} from 'react-icons/fa'
import { ShopContext } from "../shop/ShopContext";
import {useContext} from "react"
import SearchInput from "./SearchInput";



const Navbar = () => {
  const {cartItems, search} = useContext (ShopContext);
  return (

   <>
   <div className="navbar">
   
    <div className="links">
      <Link to = "/">Shops</Link>
     
      <Link to = "/productlist">AddProduct</Link>
      <Link to = "/updateproduct">Update</Link>
      <Link to ="cart" >

< FaShoppingCart size = {40}/>
<span>{cartItems?.length}</span>
</Link>
    </div>
    
    
    <SearchInput search={search} />
   </div>
   
  
   </>
  );
};

export default Navbar;
