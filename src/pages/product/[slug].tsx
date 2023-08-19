// interface
import { IProduct } from "@/interfaces/Iproducts";

// next
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "next-i18next";
import Image from "next/image";

// products
import { georgeProducts } from "@/products/products";

// styles
// import styles from "@/styles/pages/product/product.module.scss";
import styles from "@/styles/pages/product.module.scss";

export default function ProductPage({ product }: IProduct) {
    const { t } = useTranslation("product");

    if (product)
        return (
            <div className={styles.productWrapper}>
                <div className={styles.productCardContainer}>
                    <h1>{t(product.name)}</h1>

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
                            <h4>{t(product.shortDescription)}</h4>
                            <div className={styles.productPriceButton}>
                                <h3>
                                    {product.price}
                                    {t("currency")}
                                </h3>
                                <button>{t("buy")}</button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.productAdditional}>
                        <p>{t(product.description)}</p>
                        <h5>{t("instructions_for_use")}</h5>
                        <p>{t(product.instructions_for_use)}</p>
                        <h5>{t("storage_conditions")}</h5>
                        <p>{t(product.storage_conditions)}</p>
                        <h5>{t("benefits")}</h5>
                        <ul
                            dangerouslySetInnerHTML={{
                                __html: t(product.benefits) as string,
                            }}
                        />
                        <h5>{t("key_ingredients")}</h5>
                        <ul
                            dangerouslySetInnerHTML={{
                                __html: t(product.key_ingredients) as string,
                            }}
                        />
                        <div>
                            <h5>
                                {t("quantity")} <br />
                                {product.quantity}
                                {t("ml")}
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

    if (!locale) {
        throw new Error("Locale is not available in context");
    }

    const productSlug = params?.slug;
    const product = georgeProducts.find((p) => p.slug === productSlug);

    if (!productSlug || !product) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            product,
            ...(await serverSideTranslations(locale, [
                "common",
                "header",
                "product",
            ])),
        },
    };
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = georgeProducts.map((product) => ({
        params: { slug: product.slug.toString() }, // Ensure slug is a string
    }));

    return {
        paths,
        fallback: true,
    };
};
