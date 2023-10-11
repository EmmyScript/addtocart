import { useContext, useState } from "react";
import { ShopContext } from "./ShopContext";
import { IoIosHeartDislike } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { ImEye } from "react-icons/im";

export const Product = ({ data }: any) => {
  const {
    productName,
    price,
    productImage,
    thumbnail_image,
    qtty,
  } = data;
  const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);
  const [isImage, setIsImage] = useState(productImage);

  const handMouseDown = () => {
    setIsImage(thumbnail_image);
  };

  const handMouseLeave = () => {
    setIsImage(productImage);
  };
  return (
    <div className="col-md-3 col-xs-6 col-lg-4 mb-3">
      <div
        className="card text-center"
        onMouseEnter={() => handMouseDown()}
        onMouseLeave={handMouseLeave}
      >
        <div className="card-body">
          <div className="inner fs-3">
            free shipping
            <img src={isImage} className="img-aut0 image-style" />
          </div>
          <li className="description">
            <div className="dist">
              <p>
                <b>{productName}</b>
              </p>
            </div>

            <div className="price-car wt-20">
              <p>
                <span style={{ color: "blue" }}>
                  <IoIosHeartDislike />
                </span>
                2.3kg
              </p>
              <p>${price}</p>
              <p>
                <span style={{ color: "red" }}>
                  <ImEye />
                  3.6kg
                  <BiLike />
                </span>
                1.2kg
              </p>
            </div>
            <div className="d-grid">
              <>
                {qtty && cartItems.length > 0 ? (
                  <button
                    className="btn btn-dark btn-lg add-btn"
                    onClick={() => removeFromCart(data)}
                    style={{
                      backgroundColor:
                        qtty && cartItems.length > 0 ? "red" : ""
                    }}
                  >
                    {qtty && cartItems.length > 0 ? "Removes " : ""}
                  </button>
                ) : (
                  <button
                    className="btn btn-dark btn-lg add-btn"
                    onClick={() => addToCart(data)}
                  >
                    Add to cart
                  </button>
                )}
              </>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Product;
