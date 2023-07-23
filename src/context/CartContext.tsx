import { createContext, useState } from "react";

interface CartContextInterface {
    cartProducts?: any[];
    isDrawerOpen?: boolean;
    setIsDrawerOpen: (isDrawerOpen: boolean) => void;
    setCartProducts?: any;
}

export const CartContext = createContext<CartContextInterface>({
    setIsDrawerOpen: () => {},
});

export function CartContextProvider({ children }: any) {
    const [cartProducts, setCartProducts] = useState<any[]>([]);

    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    return (
        <CartContext.Provider
            value={{
                cartProducts,
                isDrawerOpen,
                setIsDrawerOpen,
                setCartProducts,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
