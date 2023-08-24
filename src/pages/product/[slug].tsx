// interface
import { IProduct } from "@/interfaces/Iproducts";

// next
import { GetStaticPaths } from "next";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useContext, useState } from "react";

// products
import { georgeProducts } from "@/products/products";

// styles
import styles from "@/styles/pages/product.module.scss";

// context
import { CartContext } from "@/context/CartContext";

// confetti effect
import Confetti from "react-dom-confetti";

const config = {
    angle: 90,
    spread: 100,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

export default function ProductPage({ product }: IProduct) {
    const { t: transalte } = useTranslation("product");

    const { addToCart } = useContext(CartContext);
    const [confettiActive, setConfettiActive] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    if (product)
        return (
            <div className={styles.productWrapper}>
                <div className={styles.productCardContainer}>
                    <h1>{transalte(product.name)}</h1>

                    <div className={styles.productDescription}>
                        <div className={styles.productCardImage}>
                            <Image
                                alt=""
                                height={9000}
                                width={9000}
                                src={product.imageUrl || ""}
                                style={{
                                    width: "80%",
                                    height: "auto",
                                }}
                            />
                        </div>

                        <div className={styles.productDescriptionPrice}>
                            <h4>{transalte(product.shortDescription)}</h4>
                            <div className={styles.productPriceButton}>
                                <h3>
                                    {`
                                        ${product.price} 
                                        ${transalte("currency")}
                                    `}
                                </h3>
                                <Confetti
                                    active={confettiActive}
                                    config={config}
                                />
                                <button
                                    disabled={isAdded} // Disable the button when the product is added
                                    onClick={() => {
                                        addToCart(product);
                                        setConfettiActive(true);
                                        setIsAdded(true); // Set the product as added
                                        setTimeout(() => {
                                            setConfettiActive(false);
                                            setIsAdded(false); // Reset the product as not added after 1 second
                                        }, 2000);
                                    }}
                                >
                                    <Confetti
                                        active={confettiActive}
                                        config={config}
                                    />
                                    {isAdded
                                        ? transalte("addedToCart")
                                        : transalte("buy")}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.productAdditional}>
                        <p>{transalte(product.description)}</p>
                        <h5>{transalte("instructions_for_use")}</h5>
                        <p>{transalte(product.instructions_for_use)}</p>
                        <h5>{transalte("storage_conditions")}</h5>
                        <p>{transalte(product.storage_conditions)}</p>
                        <h5>{transalte("benefits")}</h5>
                        <ul
                            dangerouslySetInnerHTML={{
                                __html: transalte(product.benefits) as string,
                            }}
                        />
                        <h5>{transalte("key_ingredients")}</h5>
                        <ul
                            dangerouslySetInnerHTML={{
                                __html: transalte(
                                    product.key_ingredients
                                ) as string,
                            }}
                        />
                        <div>
                            <h5>
                                {transalte("quantity")} <br />
                                {`
                                    ${product.quantity}
                                    ${transalte("ml")}
                                `}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    else return <h1>error</h1>;
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const { locale, params } = context;

    console.log("locale", locale);

    if (!locale) {
        throw new Error("Locale is not available in context");
    }

    const productSlug = params?.slug;
    const product = georgeProducts.find((p) => p.slug === productSlug);

    console.log("product", product);

    if (!productSlug || !product) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "header",
                "product",
            ])),
            product,
        },
    };
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = georgeProducts
        .map((product) => {
            return [
                { params: { slug: product.slug.toString() }, locale: "en" },
                { params: { slug: product.slug.toString() }, locale: "bg" },
            ];
        })
        .flat();

    return {
        paths,
        fallback: true,
    };
};
