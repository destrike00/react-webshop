import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { Cartcontext } from "../../context/cart.context";
import "./cart-dropdown.styles.scss";
const CartDropdown = () => {
    const { cartItems } = useContext(Cartcontext);
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button>Checkout</Button>
        </div>
    );
};

export default CartDropdown;
