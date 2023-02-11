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
/* eliminar carrito */
function clearCart(){
    setCart([])
}

/* eliminar un producto */
const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

/* items totales para el widget */
const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
};

/* calcular precio total */
const getTotalPriceInCart = () => {
    return cart.reduce((total, item) => total + (item.quantity * item.price), 0);
  };

const value = {cart, addItem, getTotalItems, clearCart, removeFromCart, getTotalPriceInCart}
    return (
        <cartContext.Provider value={ value }>
        {props.children}
        </cartContext.Provider>
    )
};