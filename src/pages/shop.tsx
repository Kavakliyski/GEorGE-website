// stlyes
import styles from "@/styles/pages/shop.module.scss";

// next, react
import { useEffect, useState } from "react";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

// endopoints
import { GET_PRODUCTS_ENDPOINT } from "@/utils/endpoints";

export default function Shop() {
    const [productsData, setProductsData] = useState<any[]>([]);
    const [loadingFetch, setLoadingFetch] = useState<boolean>(false);
    const [errorFetch, setErrorFetch] = useState<any>();

    if (!productsData) {
        return <p className={styles.loadingFetch}>Няма продукти</p>;
    }

    if (loadingFetch) {
        return <p className={styles.loadingFetch}>Зареждам...</p>;
    }

    if (errorFetch) {
        return <p className={styles.loadingFetch}>Възникна грешка!</p>;
    }

    return (
        <div className={styles.ShopWrapper}>
            <div className={styles.ProdcutsContainer}>
                {productsData.map((product, index) => (
                    <div className={styles.card} key={index}>
                        <div className={styles.imgBox}>
                            <img
                                src={product.images[0].src}
                                alt={product.name}
                                className={styles.productImage}
                            />
                        </div>

                        <div className={styles.contentBox}>
                            <h3>{product.name}</h3>
                            <h2 className={styles.productPrice}>
                                {product.price || "няма цена"}
                            </h2>
                            <Link
                                href={`${product.permalink}`}
                                className={styles.productsBuy}
                            >
                                see more
                            </Link>
                            <div
                                className={styles.productDescription}
                                dangerouslySetInnerHTML={{
                                    __html: product.description,
                                }}
                            ></div>{" "}
                        </div>
                    </div>
                ))}
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
            ...(await serverSideTranslations(locale, ["common", "header"])),
        },
    };
}
