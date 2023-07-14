import { GET_PRODUCTS_ENDPOINT, GET_PRODUCT_ENDPOINT } from "@/utils/endpoints";
import axios from "axios";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import styles from "@/styles/pages/product.module.scss";
import { InternalizationContext } from "@/context/InternalizationContext";

export default function ProductPage({ product }: any) {

    const { isLanguagesActive } = useContext(InternalizationContext);
    
    console.log(isLanguagesActive("bg"));
    

    return (
        <div className={styles.productWrapper}>
            <section className={styles.productCardContainer}>
                <div className={styles.productCardImage}>
                    <img src={product.images[0].src} />
                </div>
                <div className={styles.productCardDescription}>
                    <h1>{product.name}</h1>
                    <h2>{product.price} <span>{isLanguagesActive("bg") ? "лева" : "BGN"}</span></h2>
                    <p>{product.description}</p>
                    <p>{product.short_description}</p>

                    <button>добави в количка</button>
                </div>
            </section>
        </div>
    );
}

export async function getStaticPaths() {
    const response = await axios.get(GET_PRODUCTS_ENDPOINT);
    const products = response.data.products;

    const paths = products.map((product: any) => ({
        params: { slug: product.slug },
    }));

    return {
        paths,
        fallback: false, // Set to true if you have more dynamic pages to generate
    };
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const { locale } = context;

    if (!locale) {
        throw new Error("Locale is not available in context");
    }

    const { slug } = context.params ?? {};

    if (!slug) {
        return { notFound: true };
    }

    const response = await axios.get(GET_PRODUCT_ENDPOINT + slug);
    const product = response.data.product[0];

    return {
        props: {
            product,
            ...(await serverSideTranslations(locale, ["common", "header"])),
        },
    };
}
