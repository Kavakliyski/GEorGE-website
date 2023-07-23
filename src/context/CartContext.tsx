import { createContext, useState } from "react";

interface CartContextInterface {
    cartProducts?: any[];
    isDrawerOpen?: boolean;
    setIsDrawerOpen: (isDrawerOpen: boolean) => void;
    setCartProducts?: any;
    updateProductCount?: any;
    calculateTotal?: any;
}

export const CartContext = createContext<CartContextInterface>({
    setIsDrawerOpen: () => {},
});

export function CartContextProvider({ children }: any) {
    const [cartProducts, setCartProducts] = useState<any[]>([]);

    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    const updateCart = (newCartData: any) => {
        setCartProducts(newCartData);
    };

    const updateProductCount = (productName: string, change: number) => {
        const updatedCart = cartProducts.map((product: any) =>
            product.name === productName
                ? { ...product, count: product.count + change }
                : product
        );

        // Remove the product if count becomes 0 or negative
        const filteredCart = updatedCart.filter(
            (product: any) => product.count > 0
        );

        updateCart(filteredCart);
    };

    const calculateTotal = () => {
        let totalSum = 0;
        const productCountMap: Record<string, number> = {};

        cartProducts.forEach((product: any) => {
            // Calculate the individual product total (price * count)
            const productTotal = product.price * product.count;
            totalSum += productTotal;

            // Store the count for each product in a map
            productCountMap[product.name] = product.count;
        });

        return {
            totalSum,
            productCountMap,
        };
    };

    return (
        <CartContext.Provider
            value={{
                cartProducts,
                isDrawerOpen,
                setIsDrawerOpen,
                setCartProducts,
                updateProductCount,
                calculateTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
