// interface
import { IProduct } from "@/interfaces/Iproducts";

// next
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

// products
import { georgeProducts } from "@/products/products";

// styles
import styles from "@/styles/pages/product/product.module.scss";


export default function ProductPage({ product }: any) {
    const { t } = useTranslation("common");

    console.log('====================================');
    console.log(product);
    console.log('====================================');

    return (
        <div className={styles.productWrapper}>
            <p>prod</p>

        </div>
    );
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const { locale, params } = context;

    if (!locale) {
        throw new Error("Locale is not available in context");
    }

    const productSlug = params?.slug;
    const product = georgeProducts.find(p => p.slug === productSlug);

    if (!productSlug || !product) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            product,
            ...(await serverSideTranslations(locale, ["common", "header"])),
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
