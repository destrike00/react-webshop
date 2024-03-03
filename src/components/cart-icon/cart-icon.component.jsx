import "./cart-icon.styles.scss";
import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { Cartcontext } from "../../context/cart.context";
const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItems, cartCount } =
        useContext(Cartcontext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className="cart-icon-container">
            <ShoppingIcon
                className="shopping-icon"
                onClick={toggleIsCartOpen}
            />
            <span className="item-count">{cartCount}</span>
        </div>
    );
};
export default CartIcon;
