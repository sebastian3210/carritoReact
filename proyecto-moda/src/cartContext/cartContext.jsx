import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([])

const CartContextoProvider = ({children}) => {
    // creo los estados globales

    const [cartlist, setCartList] = useState([])

    const addItem = (productos) => {
        setCartList(productos)
    }


    return (
        <CartContext.Provider value={{
            cartlist,
            addItem
        }}>
            
            {children}

        </CartContext.Provider>
    )
}
export default CartContextoProvider