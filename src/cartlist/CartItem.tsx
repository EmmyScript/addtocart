

import {useContext} from "react"
import { ShopContext, cartObj } from "../shop/ShopContext";

 export const CartItem = ({data}:{data:cartObj}) => {

  
    const{ productName, price, productImage,qtty} = data;
    const{ addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)

  return (
    <>
    <div className="cartItem">
        
        <img src={productImage}/>
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
            <div className="ms-2 d-flex justify-content-start">
                <button className="btn btn-secondary fs-4" onClick={() => removeFromCart(data)}> - </button>
               
               <input className=" form-control fs-4" style={{width:40}} value={qtty} onChange={(e) =>
                updateCartItemCount(Number(e.target.value))}/>
                <button className="btn btn-secondary fs-4" onClick={() => addToCart(data)}> + </button>
            </div>
        </div>
    </div>

    </>

  )
}

export default CartItem;
