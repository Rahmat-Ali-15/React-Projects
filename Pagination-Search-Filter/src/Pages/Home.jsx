import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import {
  getProductDataFailure,
  getProductDataRequest,
  getProductDataSuccess,
} from "../Redux/Action.type";

let pages = 1;
let totalPages = null;

let api = `https://bakery-shop-y90p.onrender.com/product?_limit=10&_page=${pages}`;

export const Home = () => {
  const { isLoading, isError, productData, errorMsg } = useSelector(
    (state) => state.product,
  );

  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(getProductDataRequest());
    try {
      let data = await axios.get(api);
      if (!totalPages) {
        const totalCount = Number(data.headers["x-total-count"]);
        totalPages = Math.ceil(totalCount / 10);
      }
      dispatch(getProductDataSuccess(data.data));
    } catch (error) {
      dispatch(getProductDataFailure(error.message));
    }
  };

  const toggleFilterDropdown = () => {
    setToggle(!toggle);
  };

  const handleSorting = () => {
    const sortedPrice = [...productData].sort((a,b)=> a.price - b.price)
    dispatch(getProductDataSuccess(sortedPrice))
  }

  const handlePagination = () => {
    if (!totalPages) {
      const totalCount = productData.headers.get("X-Total-Count");
      totalPages = Math.ceil(totalCount / 5);
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
          <div
            onClick={toggleFilterDropdown}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <p>Filter</p>
            {toggle ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </div>
          <div
            className="filter-drop"
            style={
              toggle
                ? {
                    display: "flex",
                    flexDirection: "column",
                  }
                : { display: "none" }
            }
          >
            <div onClick={handleSorting}>Price: Low to High</div>
            <div>Price: High to Low</div>
          </div>
        </div>
      </div>

      {/* Product details */}

      {isLoading && (
        <h1 style={{ textAlign: "center", marginTop: "35px" }}>Loading...</h1>
      )}
      {isError && (
        <h1 style={{ textAlign: "center", marginTop: "35px" }}>{errorMsg}</h1>
      )}

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
        <button
          className="next-btn"
          onClick={handlePagination}
        >
          Next
        </button>
      </div>
    </>
  );
};
