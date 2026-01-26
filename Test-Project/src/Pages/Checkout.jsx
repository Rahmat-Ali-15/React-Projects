export const Checkout = () => {
    return(
        <>
            <div className="main-checkout-container">
                <div className="checkout-content-container">
                    <div className="checkout-up-content">
                        <div className="chechout-up">
                            <div className="circle-container">
                                <div className="circle active"><p>1</p></div>
                                <div className="line"></div>
                                <div className="circle"><p>2</p></div>
                                <div className="line"></div>
                                <div className="circle"><p>3</p></div>
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
                                <p className="sub-total">$0</p>
                            </div>
                            <div>
                                <p>Discount 5%</p>
                                <p className="discount">-$0</p>
                            </div>
                            <div>
                                <p>Shipping</p>
                                <p className="shipping">Free</p>
                            </div>
                            <div>
                                <p className="total">Total</p>
                                <p className="total-amt">$0</p>
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
    )
}