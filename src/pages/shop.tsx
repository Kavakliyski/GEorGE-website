// stlyes
import styles from "@/styles/pages/products/stop_aging.module.scss";

// next, react
import { useEffect, useState } from "react";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Image from "next/image";

// interface
import { IProduct } from "@/interfaces/Iproducts";

// prodcuts
import { georgeProducts } from "@/products/products";
import Head from "next/head";

// endopoints
// import { GET_PRODUCTS_ENDPOINT } from "@/utils/endpoints";z

export default function Shop() {
    const [productsData, setProductsData] =
        useState<IProduct[]>(georgeProducts);

    const { t } = useTranslation("product");

    if (!productsData) {
        return <p className={styles.loadingFetch}>Няма продукти</p>;
    }

    return (
        <>
            <Head>
                <title>GEorGE • Cosmetic • Shop</title>
            </Head>

            <div className={styles.ShopWrapper}>
                <div className={styles.ProdcutsContainer}>
                    {productsData.map((product, index) => (
                        <div className={styles.card} key={index}>
                            <div className={styles.imgBox}>
                                <Image
                                    width={225}
                                    height={150}
                                    src={product.imageUrl || ''}
                                    alt={product.name}
                                    className={styles.productImage}
                                />
                            </div>

                            <div className={styles.contentBox}>
                                <h3>{t(product.name)}</h3>
                                <h2 className={styles.productPrice}>
                                    {`
                                    ${product.price || ""} 
                                    ${t("currency")}
                                    `}
                                </h2>
                                <Link
                                    href={`product/${product.slug}`}
                                    className={styles.productsBuy}
                                >
                                    {t("seeMore")}
                                </Link>
                                <div className={styles.productDescription}>
                                    {t(product.shorterDescription || "")}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
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
