# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.












import { useDispatch, useSelector } from "react-redux";

import { MdDeleteForever } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import { delteCartItem } from "../Actions/ProductAction/ProductAction";
import { useState } from "react";

export const Cart = () => {
  let cartProduct = useSelector((state) => state.product.totalCartItem);
  let dispatch = useDispatch();

  const [qty, setQty] = useState({});

  const handleQtyChange = (id, value) => {
    if (value < 1) return; // prevent 0 or negative
    setQty((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const increaseQty = (id) => {
    setQty((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decreaseQty = (id) => {
    setQty((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  const handleDelete = (payload) => {
    dispatch(delteCartItem(payload));
  };

  return (
    <>
      <div className="main-cart-container">
        {cartProduct &&
          cartProduct.map((item) => (
            <div
              className="cart-container"
              key={item.id}
            >
              <div className="img-titile-container">
                <div className="product-title">
                  <p>{item.title}</p>
                </div>
                <div className="product-img">
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </div>
              </div>
              <div className="product-price">
                <p>₹ {item.price}.00</p>
              </div>
              <div className="increase-decrease-btns">
                <div className="btns-container">
                  <div className="decrease-btn" onClick={() => decreaseQty(item.id)}>
                    <FaMinus />
                  </div>
                  <input
                    type="text"
                    className="product-input"
                    value={qty[item.id] || 1}
                    onChange={(e) =>
                      handleQtyChange(item.id, Number(e.target.value))
                    }
                    min="1"
                  />
                  <div className="increment-btn" onClick={() => increaseQty(item.id)}>
                    <FaPlus />
                  </div>
                </div>
                <div className="delete-item">
                  <MdDeleteForever
                    className="delete-btn"
                    onClick={() => handleDelete(item.id)}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
