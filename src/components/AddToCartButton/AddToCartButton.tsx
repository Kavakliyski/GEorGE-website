import { CartContext } from "@/context/CartContext";
import React, { useContext } from "react";

export default function AddToCartButton(props: any) {
    const { product } = props;
    const { cartProducts, setCartProducts } = useContext(CartContext);

    const handleAddToCart = (product: any) => {
        const existingProduct =
            cartProducts &&
            cartProducts.find(
                (cartProduct: any) => cartProduct.name === product.name
            );

        if (existingProduct) {
            // Product already exists in the cart, update the count
            setCartProducts((prevCartProducts: any) =>
                prevCartProducts.map((cartProduct: any) =>
                    cartProduct.name === product.name
                        ? { ...cartProduct, count: cartProduct.count + 1 }
                        : cartProduct
                )
            );
        } else {
            // Product does not exist in the cart, add it with count = 1
            setCartProducts((prevCartProducts: any) => [
                ...prevCartProducts,
                {
                    name: product.name,
                    price: product.price,
                    image: product.images[0].src,
                    description: product.description,
                    count: 1,
                },
            ]);
        }
    };

    return (
        <div>
            <button onClick={() => handleAddToCart(product)}>AddtoCart</button>
        </div>
    );
}
