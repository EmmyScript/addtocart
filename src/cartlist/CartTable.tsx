import { useContext } from "react";
import { ShopContext, cartObj } from "../shop/ShopContext";

export function CartTable() {
  const { cartItems, addToCart, reduceFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <>
      <div className="container-fliud">
        <div className="row">
          <div className="col-md-3"></div>
          <p className="  text-center fs-5 bg-dark text-white">
            {" "}
            List of Product Selected From Shop
          </p>
          <div className="table-responsive-sm ">
          <table className="table col-md-6">
            <thead>
              <tr>
                <th className="table-secondary">Image</th>
                <th className="table-primary">ProductName</th>
                <th className="table-danger">Price</th>
                <th className="table-success">Option</th>
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
                      onChange={(e) =>
                        updateCartItemCount(Number(e.target.value))
                      }
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
</div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
}

export default CartTable;
