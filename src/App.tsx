
import  {BrowserRouter as Router,Routes, Route,} from "react-router-dom";
import Navbar from "./components/Navbar"
import Shop from "./components/Shop"
import Cart from "./components/Cart";
import { ShopContextProvider } from "./shop/ShopContext";
import ProductList from "./components/ProductList";
import UpdateProduct from "./components/UpdateProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";


const App = () => {
  return (

    <div className="containers" >
      <ShopContextProvider>
      <Router>
        <Navbar/>
        
        <Routes>
          <Route path="/" element = {<Shop/>} />
          <Route path="/cart" element = {<Cart/>} /> 
          <Route path="/productlist" element = {<ProductList />} />
          <Route path="/updateproduct" element = {<UpdateProduct/>} />
          <Route path = "/login" element = {<Login/>} />
          <Route path = "/register" element = {<Register/>} />
        </Routes>
      </Router>
      </ShopContextProvider>
      
   
</div>


  )
}

export default App;

