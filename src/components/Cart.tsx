
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { PiHandSwipeRightFill } from "react-icons/pi";
import { ShopContext } from "../shop/ShopContext";
import CartTable from "../cartlist/CartTable";
import CartCanvas from "./CartCanvas";


export const Cart = () => {
  const { CartItems, getTotalCartAmount, setCartItems } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1 className="cart-list text-center">LIST OF CART ITEMS</h1>
      </div>
      <div className="cartItems">
      <CartCanvas/>
        <CartTable />
        
      
      {totalAmount > 0 ? (
        <div className="checkout mb-3">
          <p className="fs-3 text-center text-success">
            subtotal: ${totalAmount}{" "}
          </p>
          <button className="btn btn-secondary" onClick={() => navigate("/")}>continue shopping</button>
          <button className="btn btn-secondary">Checkout</button>
        </div>
      ) : (
        <h1 style={{ color: "red" }}>
          <span>
            <MdShoppingBasket />
            {CartItems?.length <= 0 && (
              <h4 className="fs-3 fw-bolder">Your Cart Is Empty</h4>
            )}
          </span>
          <PiHandSwipeRightFill />
          Click Shop To Add
        </h1>
      )}

      <button className="btn btn-success" onClick={() => setCartItems([])}>
        Clear cart
      </button>
    </div>
    </div>
  )
          }
            export default Cart;
