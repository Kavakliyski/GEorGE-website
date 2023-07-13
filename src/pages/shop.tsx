import { GET_PRODUCTS_ENDPOINT } from "@/utils/endpoints";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "@/styles/pages/shop.module.scss";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";

export default function Shop() {
    const [productsData, setProductsData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(GET_PRODUCTS_ENDPOINT);
                setProductsData(response.data.products);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    // console.log(productsData[0].images[0].src);

    if (!productsData) {
        return <h1>Няма продукти</h1>;
    }

    return (
        <div className={styles.ShopWrapper}>
            <h1>shop</h1>
            <h1>shop</h1>
            <h1>shop</h1>
            <h1>shop</h1>
            <h1>shop</h1>
            <h1>shop</h1>
            <h1>shop</h1>

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
                            <a href="#" className={styles.productsBuy}>
                                Buy Now
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <h1>shop</h1>
            <h1>shop</h1>
            <h1>shop</h1>
            <h1>shop</h1>
            <h1>shop</h1>
            <h1>shop</h1>
            <h1>shop</h1>
            <h1>shop</h1>
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
