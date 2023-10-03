// stlyes
import styles from "@/styles/pages/foryou.module.scss";

// next
import Head from "next/head";
import Image from "next/image";
import { GetStaticPropsContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// apollo, gql
import apolloClient from "@/lib/apollo-client";
import { GET_POSTS } from "@/lib/queries";

// parser
import { Parser } from "html-to-react";

//interface
import { PagePropsData } from "@/interfaces/Ipostdata";

export default function Foryou({ posts }: PagePropsData) {
    const { t } = useTranslation("foryou");

    return (
        <>
            <Head>
                <title>GEorGE • Cosmetic • For you</title>
                <meta
                    name="description"
                    content="Брандът GEorGE е създаден въз основа на иновативните технологии в световната козметична индустрия. Смело можем да твърдим, че ние сме революционери в разработването на собствени натурални продукти с колоидно злато, колоидно сребро и хидролизиран хиалурон, които от своя страна действат на дълбоко клетъчно ниво и подпомагат регенерацията на кожата."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta charSet="UTF-8" />
                <meta name="az197" content="GEorGe Cosmetics" />
                <meta name="keywords" content="keyword1, keyword2, keyword3" />
                <meta name="theme-color" content="#191716" />
            </Head>

            <div className={styles.ForyouPageWrapper}>
                <div className={styles.foryouContainer}>
                    <div className={styles.foryouPageTitle}>
                        <Image
                            width={200}
                            height={200}
                            alt=""
                            src={"/favicon.png"}
                        />
                        <h1>{t("title")}</h1>
                    </div>

                    <div className={styles.foryouText}>
                        {Parser().parse(posts)}
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const { locale } = context;
    const client = apolloClient();

    const { data } = await client.query({
        query: GET_POSTS,
        variables: {
            title: `${locale === "en" ? "for you" : "за вас"}`,
        },
    });

    if (!locale) {
        throw new Error("Locale is not available in context");
    }

    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "header",
                "foryou",
            ])),
            posts: data.posts.edges[0].node.content,
        },
        // revalidate: 60,
    };
}
