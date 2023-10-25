import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { ShopContextProvider } from "./shop/ShopContext";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AdminNavbar from "./components/AdminNavbar";
import ProductList from "./components/ProductList";
import UpdateProduct from "./components/UpdateProduct";
import AdminDashBoards from "./components/AdminDashBoards";
import { UpdateModal } from "./components/UpdateModal";



const App = () => {
  const isAdmin = false
  return (
    <div className="containers">

      
      <ShopContextProvider>
        <Router>
          {isAdmin ? <AdminNavbar /> : <Navbar />}

          {isAdmin ? (
            <Routes>
          

              <Route path="/admindashboard" element={<AdminDashBoards />} />
              <Route path="/updateproductlist" element={<UpdateProduct/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/productlist" element={<ProductList />} />
              <Route path="/update-product/:mydata" element={<UpdateModal />} />

            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          )}
        </Router>
      </ShopContextProvider>
      
    </div>
  );
};

export default App;

