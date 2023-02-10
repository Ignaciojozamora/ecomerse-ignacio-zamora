import { useState, createContext } from "react";


export const cartContext = createContext();

export function CartContextProvider(props){
    const [cart, setCart] = useState([]);

/* añadir un producto al carrito */
function addItem(product, count) {
    const isInCart = cart.some((itemInCart) => itemInCart.id === product.id);
    if (!isInCart) {
    setCart([...cart, {...product}]);
    } else {
    const productIndex = cart.findIndex((item) => item.id === product.id);
    cart[productIndex].quantity = cart[productIndex].quantity + count;
    setCart([...cart]);
    }

}
/* eliminar un producto */
function clearCart(){
    setCart([])
}

const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
};

const value = {cart, addItem, getTotalItems, clearCart}
    return (
        <cartContext.Provider value={ value }>
        {props.children}
        </cartContext.Provider>
    )
};