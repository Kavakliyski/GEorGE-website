import { createContext, useState } from "react";

interface CartContextInterface {
    cartProducts?: any[];
    isDrawerOpen?: boolean;
    setIsDrawerOpen: (isDrawerOpen: boolean) => void;
}


export const CartContext = createContext<CartContextInterface>({
    setIsDrawerOpen: () => {}
});

export function CartContextProvider({ children }: any) {

    const [cartProducts, setcartProducts] = useState([]);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


    return (
        <CartContext.Provider value={{ cartProducts, isDrawerOpen, setIsDrawerOpen }}>
            {children}
        </CartContext.Provider>
    )
}