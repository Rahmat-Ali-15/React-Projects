import { useDispatch, useSelector } from "react-redux";
import {
  GET_PRODUCT_DATA_FAILURE,
  GET_PRODUCT_DATA_REQUEST,
  GET_PRODUCT_DATA_SUCCESS,
} from "../Actions/ProductAction";
import axios from "axios";
import { useEffect } from "react";

let api = "https://bakery-shop-y90p.onrender.com/product";

export const Home = () => {
  let { isLoading, isError, productData, totalProduct } = useSelector(
    (state) => state.product,
  );
  console.log("🚀 ~ totalProduct:", totalProduct);
  console.log("🚀 ~ isError:", isError);
  console.log("🚀 ~ isLoading:", isLoading);
  let dispatch = useDispatch();

  const handleProduct = async () => {
    dispatch({ type: GET_PRODUCT_DATA_REQUEST });
    try {
      let res = await axios.get(api);
      let productDatas = await res.data;
      dispatch({ type: GET_PRODUCT_DATA_SUCCESS, payload: productDatas });
    } catch (error) {
      console.log("🚀 ~ error:", error);
      dispatch({ type: GET_PRODUCT_DATA_FAILURE });
    }
  };

  const handleAddToCart = () => {
    console.log("🚀 ~ id:", productData.id);
    // productData.id === id ? totalProduct.push(productData) : null
    console.log("Login")    
  }

  useEffect(() => {
    handleProduct()
  },[])

  return (
    <>
      {isLoading ? <h1>Loading..</h1> : null}
      {
        isError ? <h1 style={{textAlign: "center", marginTop: "50px"}}>Opps! Something went wrong...</h1> : null
      }
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
              <button className="add-to-cart" onClick={()=>handleAddToCart(el.id)}>ADD TO CART</button>
            </div>
          ))}
      </div>
    </>
  );
};
