import { CartContext } from "@/context/CartContext";
import React, { useContext } from "react";

export default function AddToCartButton(props: any) {
    const { product } = props;
    const { cartProducts, setCartProducts } = useContext(CartContext);

    const handleAddToCart = (product: any) => {
        setCartProducts((prevCartProducts: any) => [
            ...prevCartProducts,
            {
                name: product.name,
                price: product.price,
                image: product.images[0].src,
                description: product.description,
            },
        ]);
    };

    return (
        <div>
            <button onClick={() => handleAddToCart(product)}>AddtoCart</button>
        </div>
    );
}
