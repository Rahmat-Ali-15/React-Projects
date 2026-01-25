import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

export const Navbar = () => {
    const productInCart = useSelector(state => state.product.totalCartItem)

  const links = [
    { path: "/", element: "Home" },
    { path: "cart", element: "Cart" },
    { path: "checkout", element: "Checkout" },
    { path: "login", element: "Login" },
  ];

  return (
    <>
      <div className="navbar-container">
        {links.map((el, id) => (
          <NavLink
            to={el.path}
            key={id}
            end
          >
            {el.element === "Cart" ? (
              <div className="cart-link">
                <span>Cart</span>

                {/* Cart Count Badge */}
                <div className="cart-count">{productInCart.length}</div>
              </div>
            ) : (
              el.element
            )}
          </NavLink>
        ))}
      </div>
    </>
  );
};
