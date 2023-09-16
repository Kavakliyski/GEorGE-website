// stlyes
import styles from "./Drawer.module.scss";

// react, next
import { useContext, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

// context
import { CartContext } from "@/context/CartContext";
import { InternalizationContext } from "@/context/InternalizationContext";

// icon
import XIcon from "../../../public/icons/close-x-icon.svg";

export const Drawer = () => {
    const { t: translate } = useTranslation("header");
    const { t: translateProdcut } = useTranslation("product");

    const router = useRouter();

    const {
        isDrawerOpen,
        setIsDrawerOpen,
        cartProducts,
        updateProductCount,
        calculateTotal,
    } = useContext(CartContext);

    const { totalSum, productCountMap } = calculateTotal();

    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [isDrawerOpen]);

    // console.log("cartProducts", cartProducts);

    return (
        <>
            <div
                onClick={() => setIsDrawerOpen(false)}
                className={
                    isDrawerOpen ? styles.GrayScreen : styles.DrawerWrapper
                }
            ></div>

            <div
                className={`${styles.DrawerWrapperVisible} ${
                    isDrawerOpen ? styles.Open : styles.Close
                }`}
            >
                <div className={styles.DrawerContainer}>
                    <div className={styles.ButtonClose} onClick={() => setIsDrawerOpen(false)}>
                        <Image
                            src={XIcon}
                            alt="X"
                        />
                    </div>

                    {cartProducts?.length ? (
                        <>
                            <div className={styles.DrawerProducts}>
                                {cartProducts.map((product: any) => (
                                    <div
                                        key={product.name}
                                        className={styles.ProductItem}
                                    >
                                        <Image
                                            className={styles.productImage}
                                            src={product.imageUrl || ""}
                                            alt={product.name}
                                            width={190}
                                            height={100}
                                            style={{
                                                width: "110px",
                                                height: "100%",
                                            }}
                                        />
                                        <div
                                            className={
                                                styles.productDescription
                                            }
                                        >
                                            <p>
                                                {translateProdcut(product.name)}
                                            </p>
                                        </div>

                                        <div className={styles.productCount}>
                                            <button
                                                onClick={() =>
                                                    updateProductCount(
                                                        product.name,
                                                        +1
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                            <span>{product.count}</span>
                                            <button
                                                onClick={() =>
                                                    updateProductCount(
                                                        product.name,
                                                        -1
                                                    )
                                                }
                                            >
                                                -
                                            </button>
                                        </div>

                                        <div className={styles.productPrice}>
                                            <p id={styles.price}>
                                                {product.price}
                                            </p>
                                            <span>{translate("currency")}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.DrawerTotal}>
                                <div className={styles.Subtotal}>
                                    <h3>{translate("subtotal1")}</h3>
                                    <h3>
                                        {totalSum.toFixed(2)}
                                        {translate("currency")}
                                    </h3>
                                </div>
                                <p>{translate("subtotal2")}</p>
                                <button
                                    id={styles.CheckoutButton}
                                    onClick={() => {
                                        router.push("/checkout");
                                        setIsDrawerOpen(false);
                                    }}
                                >
                                    {translate("checkout")}
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.DrawerEmptyCart}>
                                <p>{translate("empty1")}</p>
                                <p>
                                    {translate("empty2")}{" "}
                                    <Link
                                        href="/shop"
                                        onClick={() => setIsDrawerOpen(false)}
                                    >
                                        {translate("here")}
                                    </Link>
                                    .
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};
