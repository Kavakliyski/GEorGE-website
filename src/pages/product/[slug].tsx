// styles
import styles from "@/styles/pages/product.module.scss";

// next, react
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

// endpoints
import { GET_PRODUCTS_ENDPOINT, GET_PRODUCT_ENDPOINT } from "@/utils/endpoints";

// componets
import AddToCartButton from "@/components/AddToCartButton/AddToCartButton";

// context
import { InternalizationContext } from "@/context/InternalizationContext";

export default function ProductPage({ product }: any) {
    const { t: translate } = useTranslation("header");

    if (!product) return null;

    return (
        <div className={styles.productWrapper}>
            <section className={styles.productCardContainer}>
                <div className={styles.productCardImage}>
                    <img src={product.images[0].src} />
                </div>
                <div className={styles.productCardDescription}>
                    <h1>{product.name}</h1>
                    <h2>
                        {product.price} <span> {translate("currency")}</span>
                    </h2>
                    <div
                        className={styles.productDescription}
                        dangerouslySetInnerHTML={{
                            __html: product.description,
                        }}
                    ></div>{" "}
                    <div
                        className={styles.productDescription}
                        dangerouslySetInnerHTML={{
                            __html: product.short_description,
                        }}
                    ></div>{" "}
                    <AddToCartButton product={product} />
                </div>
            </section>
        </div>
    );
}

export async function getStaticProps(context: GetStaticPropsContext) {
    try {
        const { locale } = context;

        if (!locale) {
            throw new Error("Locale is not available in context");
        }

        const { slug } = context.params ?? {};

        if (!slug) {
            return { notFound: true };
        }

        return {
            props: {
                ...(await serverSideTranslations(locale, ["common", "header"])),
            },
        };
    } catch (error) {
        console.log("Error while fetching product:", error);
        return {
            props: {
                error: "An error occurred while trying to fetch the product, please try again later",
            },
        };
    }
}
