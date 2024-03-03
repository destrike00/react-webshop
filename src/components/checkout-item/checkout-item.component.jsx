import "./checkout-item.styles.scss";
import { useContext } from "react";

import { Cartcontext } from "../../context/cart.context";
const CheckoutItem = ({ item }) => {
    const { name, imageUrl, price, quantity } = item;
    const { clearItemFromCart, addItemToCart, removeItemFromCart } =
        useContext(Cartcontext);

    const clearItemHandler = () => clearItemFromCart(item);
    const addItemHandler = () => addItemToCart(item);
    const removeItemHandler = () => removeItemFromCart(item);
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <br />
            <span className="quantity">{quantity}</span>
            <br />
            <span className="price">{price}</span>
            <br />
            <div className="remove-button" onClick={removeItemHandler}>
                &#10005;
            </div>
        </div>
    );
};

export default CheckoutItem;
