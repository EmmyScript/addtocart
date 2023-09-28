
import  {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar"
import Shop from "./components/Shop"
import Cart from "./components/Cart";
import { ShopContextProvider } from "./shop/ShopContext";
import ProductList from "./components/ProductList";
import UpdateProduct from "./components/UpdateProduct";

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
        </Routes>
      </Router>
      </ShopContextProvider>
      
    
</div>

  )
}

export default App;