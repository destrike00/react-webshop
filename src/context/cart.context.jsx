import { createContext, useState, useEffect } from "react";

const handleAddItem = (cartItems, product) => {
    const cartItemExists = cartItems.find(
        (cartItem) => cartItem.id === product.id
    );

    if (cartItemExists) {
        return cartItems.map((cartItem) =>
            cartItem.id === product.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    return [...cartItems, { ...product, quantity: 1 }];
};

export const Cartcontext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCartCount(newCartCount);
    }, [cartItems]);

    const addItemToCart = (product) => {
        setCartItems(handleAddItem(cartItems, product));
    };
    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        cartCount,
    };
    return (
        <Cartcontext.Provider value={value}>{children}</Cartcontext.Provider>
    );
};
