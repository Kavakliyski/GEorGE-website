// next, react
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";
import { useContext, useState } from "react";
import Image from "next/image";

// styles
import styles from "@/styles/pages/checkout.module.scss";

// context
import { CartContext } from "@/context/CartContext";

export default function Checkout() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const { t: translate } = useTranslation("header");
    const { t: translateProduct } = useTranslation("product");

    const { cartProducts, updateProductCount, calculateTotal } =
        useContext(CartContext);

    const { totalSum, productCountMap } = calculateTotal();

    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        if (cartProducts?.length == 0) return alert(translate("alert"));
        if (!firstName || !lastName || !email || !address || !phoneNumber) {
            alert("All fields are required!");
            return;
        }
        e.preventDefault();
        console.log({ firstName, lastName, email, address, phoneNumber });
    };

    return (
        <div className={styles.checkoutWrapper}>
            <div className={styles.checkoutContainer}>
                <div className={styles.fromContainer}>
                    <h2>{translate("checkout")}</h2>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <label>
                            {translate("firstname")}
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </label>

                        <label>
                            {translate("lastname")}
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </label>

                        <label>
                            {translate("email")}
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>

                        <label>
                            {translate("address")}
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </label>

                        <label>
                            {translate("phonenumber")}
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </label>
                        {translate("gdpr")}

                        <button
                            type="submit"
                            value="submit"
                            onClick={handleSubmit}
                        >
                            {translate("checkout")}
                        </button>
                    </form>
                </div>
                <div className={styles.ProdcutsContainer}>
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
                                            src={product.imageUrl}
                                            alt={product.name}
                                            width={190}
                                            height={100}
                                            style={{
                                                width: "210px",
                                                height: "100%",
                                            }}
                                        />
                                        <div
                                            className={
                                                styles.productDescription
                                            }
                                        >
                                            <p>
                                                {translateProduct(product.name)}
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
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.DrawerEmptyCart}>
                                <p>{translate("empty1")}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const { locale } = context;

    if (!locale) {
        throw new Error("Locale is not available in context");
    }

    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "header",
                "product",
            ])),
        },
    };
}
