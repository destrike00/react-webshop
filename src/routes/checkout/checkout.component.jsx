import "./checkout.styles.scss";
import { useContext } from "react";
import { Cartcontext } from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
const Checkout = () => {
    const { cartItems, addItemToCart } = useContext(Cartcontext);
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map((cartItem) => {
                return <CheckoutItem item={cartItem} key={cartItem.id} />;
            })}
            <span className="total">Total: 0</span>
        </div>
    );
};
export default Checkout;
