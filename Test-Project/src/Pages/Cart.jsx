import { useDispatch, useSelector } from "react-redux"

import { MdDeleteForever } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import { delteCartItem } from "../Actions/ProductAction/ProductAction";

export const Cart = () => {

    let cartProduct = useSelector(state => state.product.totalCartItem);
    let dispatch = useDispatch()

    const handleDelete = (payload) => {
        dispatch(delteCartItem(payload))
    }


    return(
        <>
        <div className="main-cart-container">
        
        {
            cartProduct && cartProduct.map((item) => (
                <div className="cart-container" key={item.id}>
                    <div className="img-titile-container">
                        <div className="product-title">
                            <p>{item.title}</p>
                        </div>
                        <div className="product-img">
                            <img src={item.image} alt={item.title} />
                        </div>
                    </div>
                    <div className="product-price">
                        <p>₹ {item.price}.00</p>
                    </div>
                    <div className="increase-decrease-btns">
                        <div className="btns-container">
                            <div className="decrease-btn">
                                <FaMinus />
                            </div>
                            <input type="text" className="product-input" />
                            <div className="increment-btn">
                                <FaPlus />
                            </div>
                        </div>
                        <div className="delete-item">
                            <MdDeleteForever className="delete-btn" onClick={()=>handleDelete(item.id)} />
                        </div>
                    </div>
                </div>
                
            ))
        }
        </div>
        </>
    )
}