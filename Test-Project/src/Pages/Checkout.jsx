import { useSelector } from "react-redux";

export const Checkout = () => {
  const subTotalPrice = useSelector((state) =>
    state.product.subTotalPrice.reduce(
      (acc, curr) => {
        return Number(acc) + Number(curr);
      },
      0,
    ),
  );

  const formattedSubTotalPrice = subTotalPrice.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const discount = (subTotalPrice * 5) / 100;

  const formattedDiscount = discount.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const totalPrice = subTotalPrice - discount;

  const formattedTotalPrice = totalPrice.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });



  return (
    <>
      <div className="main-checkout-container">
        <div className="checkout-content-container">
          <div className="checkout-up-content">
            <div className="chechout-up">
              <div className="circle-container">
                <div className="circle active">
                  <p>1</p>
                </div>
                <div className="line"></div>
                <div className="circle">
                  <p>2</p>
                </div>
                <div className="line"></div>
                <div className="circle">
                  <p>3</p>
                </div>
              </div>
              <div className="steps">
                <p>Cart</p>
                <p>Billing & Address</p>
                <p>Payment</p>
              </div>
            </div>
          </div>
          <div className="chechout-bottom">
            <div className="div-up">
              <div>Product</div>
              <div>Quantity</div>
              <div>Price</div>
            </div>
            <div className="order-summary">
              <h3>Order Summary</h3>
              <div>
                <p>Sub Total</p>
                <p className="sub-total">$ {formattedSubTotalPrice}</p>
              </div>
              <div>
                <p>Discount 5%</p>
                <p className="discount">$ {formattedDiscount}</p>
              </div>
              <div>
                <p>Shipping</p>
                <p className="shipping">Free</p>
              </div>
              <div>
                <p className="total">Total</p>
                <p className="total-amt">$ {formattedTotalPrice}</p>
              </div>
            </div>
            <div className="prev-next-btns">
              <button className="prev-btn">Previous</button>
              <button className="next-btn">Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
