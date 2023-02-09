const { createContext} = require("react");

export const cartContext = createContext();

export function CartContextProvider(props){
    let cart = [];
    return (
        <cartContext.Provider value={ { cart } }>
        {props.children}
        </cartContext.Provider>
    )
};