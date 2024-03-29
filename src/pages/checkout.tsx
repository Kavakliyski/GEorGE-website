// next, react
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";
import { useContext, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// styles
import styles from "@/styles/pages/checkout.module.scss";

// context
import { CartContext } from "@/context/CartContext";

// axios
import axios from "axios";

export default function Checkout() {
    const { t: translate } = useTranslation("header");
    const { t: translateProduct } = useTranslation("product");

    const [loading, setLoading] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gdpr, setGdpr] = useState<Boolean>(false);
    const [invoice, setInvoice] = useState<Boolean>(false);
    const [notes, setNotes] = useState("");

    const [showPopup, setShowPopup] = useState(false);

    const router = useRouter();

    const {
        cartProducts,
        updateProductCount,
        calculateTotal,
        setCartProducts,
    } = useContext(CartContext);

    const { totalSum, productCountMap } = calculateTotal();

    const handleSubmit = async (e: React.FormEvent<EventTarget>) => {
        if (cartProducts?.length == 0) {
            e.preventDefault();
            return alert(translate("alert"));
        }
        if (
            !firstName ||
            !lastName ||
            !email ||
            !address ||
            !phoneNumber ||
            !gdpr
        ) {
            alert(translate("fields"));
            e.preventDefault();
            return;
        }

        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post("/api/sendEmail", {
                firstName: firstName,
                lastName: lastName,
                email: email,
                address: address,
                phoneNumber: phoneNumber,
                notes: notes,
                cartProducts: cartProducts,
                totalSum: totalSum,
                invoice: invoice,
            });

            if (response.status === 200) {
                setLoading(false);
                // console.log("successfully");
                alert(translate("orderSuccess"));
                setCartProducts([]);
                router.reload();
            }
        } catch (error) {
            setLoading(false);
            console.error("Error sending email:", error);
        }
    };

    return (
        <div className={styles.checkoutWrapper}>
            <div className={styles.checkoutContainer}>
                <div className={styles.fromContainer}>
                    <h2>{translate("checkout")}</h2>
                    <br />

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <label>
                            {translate("firstname")}*
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </label>

                        <label>
                            {translate("lastname")}*
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </label>

                        <label>
                            {translate("email")}*
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>

                        <label>
                            {translate("address")}*
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </label>

                        <label>
                            {translate("phonenumber")}*
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </label>

                        <div className={styles.gdpr}>
                            <label className={styles.customCheckbox}>
                                <input
                                    type="checkbox"
                                    onClick={() => setInvoice(!invoice)}
                                />
                                <span className={styles.checkmark}></span>
                            </label>
                            <div>{translate("invoice")}</div>
                        </div>

                        <div className={styles.gdpr}>
                            <label className={styles.customCheckbox}>
                                <input
                                    type="checkbox"
                                    onClick={() => setGdpr(!gdpr)}
                                />
                                <span className={styles.checkmark}></span>
                            </label>

                            <a
                                href="/Personal data privacy policy.pdf"
                                target="_blank"
                            >
                                <div>{translate("gdpr")}*</div>
                            </a>
                        </div>

                        <label>
                            {translate("notes")}
                            <textarea
                                id={styles.textArea}
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                            />
                        </label>

                        <br />

                        <button
                            type="submit"
                            value="submit"
                            onClick={handleSubmit}
                        >
                            {loading
                                ? translate("loading")
                                : translate("checkout")}
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
                                                width: "20%",
                                                height: "100%",
                                            }}
                                        />
                                        <div
                                            className={
                                                styles.productDescription
                                            }
                                        >
                                            <h3>
                                                {translateProduct(product.name)}
                                            </h3>
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
                            <div
                                className={styles.DrawerEmptyCart}
                                id={styles.empty}
                            >
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
