import { useContext } from "react";
import { ShopContext, cartObj } from "../shop/ShopContext";

 export function CartTable () {
  //const{ productName, price, productImage,qtty} = data;
  const { cartItems, addToCart, reduceFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <>
    <div className="container">
    <div className="row">
    <div className="col-md-2"></div>
    <p className="text-center fs-5"></p>
      <table className="table col-md-8">
        
        <thead>
          <tr>
            <th>Image</th>
            <th>Product name</th>
            <th>price</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((val: cartObj) => (
            <tr key={val._id}>
              <td>
                <img
                  src={val.productImage}
                  alt="Image"
                  className="img-auto w-35 h-25"
                />
              </td>
              <td>{val.productName}</td>
              <td>{val.price}</td>
              <td className="ms-2 d-flex justify-content-start">
                <button
                  className="btn btn-secondary fs-4"
                  onClick={() => reduceFromCart(val)}
                >
                  {" "}
                  -{" "}
                </button>
                <input
                  className=" form-control fs-4"
                  style={{ width: 40 }}
                  value={val.qtty}
                  onChange={(e) => updateCartItemCount(Number(e.target.value))}
                />
                <button
                  className="btn btn-secondary fs-4"
                  onClick={() => addToCart(val)}
                >
                  {" "}
                  +{" "}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     <div className="col-md-2"></div>
    </div>
    </div>
    
    </>
    
  );
}

export default CartTable;
