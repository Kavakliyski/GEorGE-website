// styles
import styles from "@/styles/pages/about.module.scss";
import spinnerStyle from "@/styles/spinner.module.scss";

// next
import Head from "next/head";
import Image from "next/image";
import { GetStaticPropsContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState, useEffect } from "react";

// apolo, gql
import apolloClient from "@/lib/apollo-client";
import { GET_POSTS } from "@/lib/queries";

// parser
import { Parser } from "html-to-react";

export default function About(locale: string) {
    const { t } = useTranslation("about");

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const client = apolloClient();
            const { data } = await client.query({
                query: GET_POSTS,
                variables: {
                    title: `${locale === "en" ? "about us" : "за нас"}`,
                },
            });

            setPosts(data.posts.edges[0].node.content);
        };

        fetchData();
    }, [locale]);

    if (!posts) {
        return (
            <div className={styles.TempContainer}>
                <div className={spinnerStyle.Spinner}></div>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>GEorGE • Cosmetic • About</title>
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
                {/* Keywords (specify relevant keywords related to your web page content for SEO): */}
                <meta name="keywords" content="keyword1, keyword2, keyword3" />
                <meta name="theme-color" content="#191716" />
            </Head>

            <div className={styles.AboutPageWrapper}>
                <div className={styles.aboutContainer}>
                    <Image
                        width={200}
                        height={200}
                        alt=""
                        src={"/favicon.png"}
                    />
                    <h1>{t("about")}</h1>

                    <div className={styles.aboutText}>
                        {Parser().parse(posts)}
                    </div>
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
                "about",
            ])),
            locale: locale,
        },
    };
}
