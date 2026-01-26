import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";


import { addToCart, getProductDataFailure, getProductDataRequest, getProductDataSuccess } from "../Actions/ProductAction/ProductAction";

let api = "https://bakery-shop-y90p.onrender.com/product";

export const Home = () => {
  let { isLoading, isError, productData } = useSelector(state => state.product);
  let dispatch = useDispatch();

  const handleProduct = async () => {
    dispatch(getProductDataRequest());
    try {
      let res = await axios.get(api);
      let productDatas = await res.data;
      dispatch(getProductDataSuccess(productDatas));
    } catch (error) {
      console.log("🚀 ~ error:", error);
      dispatch(getProductDataFailure());
    }
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  };

  useEffect(() => {
    handleProduct();
  }, []);

  return (
    <>
        <h1 style={{textAlign: "center"}}>Bakery Product</h1>
      {isLoading ? <h1 style={{textAlign: "center", marginTop: "50px"}}>Loading..</h1> : null}
      {isError ? (
        <h1 style={{ textAlign: "center", marginTop: "50px" }}>
          Opps! Something went wrong...
        </h1>
      ) : null}
      <div className="card-main-container">
        {productData &&
          productData.map((el, id) => (
            <div
              className="card-container"
              key={id}
            >
              <div className="img-container">
                <img
                  src={el.image}
                  alt={el.title}
                />
              </div>
              <div className="product-title">
                <p>{el.title}</p>
              </div>
              <div className="product-price">
                <p>₹ {el.price}</p>
              </div>
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(el)}
              >
                ADD TO CART
              </button>
            </div>
          ))}
      </div>
    </>
  );
};
