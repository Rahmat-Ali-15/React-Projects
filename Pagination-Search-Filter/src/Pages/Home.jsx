import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDataFailure,
  getProductDataRequest,
  getProductDataSuccess,
} from "../Redux/Action.type";
import { useEffect } from "react";

let api = "https://bakery-shop-y90p.onrender.com/product?_limit=10";

export const Home = () => {
  const { isLoading, isError, productData } = useSelector(
    (state) => state.product,
  );
  console.log("🚀 ~ productData:", productData);
  console.log("🚀 ~ isError:", isError);
  console.log("🚀 ~ isLoading:", isLoading);

  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(getProductDataRequest());
    try {
      let data = await axios.get(api);
      dispatch(getProductDataSuccess(data.data));
    } catch (error) {
      dispatch(getProductDataFailure());
      console.log("🚀 ~ error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="task_heading">
        <h1>Pagination, Search & Filter</h1>
      </div>

      {/* filter */}

      <div className="filter-container">
        <div className="filter-content">
          <p>Filter</p>
          <div className="filter-drop">
            <div>Price: Low to High</div>
            <div>Price: High to Low</div>
          </div>
        </div>
      </div>

      {/* Product details */}

      <div className="product-details-container">
        {productData &&
          productData.map((el, id) => (
            <div
              key={id}
              className="product-details"
            >
              <img
                src={el.image}
                alt={el.title}
              />
              <p>{el.category}</p>
              <div className="title-price">
                <p>{el.title}</p>
                <p>{el.price}</p>
              </div>
            </div>
          ))}
      </div>

      <div className="pagination-container">
        <button className="prev-btn">Prev</button>
        <div className="number-container">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
          <div className="box">4</div>
          <div className="box">5</div>
        </div>
        <button className="next-btn">Next</button>
      </div>
    </>
  );
};
