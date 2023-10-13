// styles
import styles from "@/styles/pages/series/aurum.module.scss";
import spinnerStyle from "@/styles/spinner.module.scss";

// i18n
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// next
import { GetStaticPropsContext } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// apolog, gql
import apolloClient from "@/lib/apollo-client";
import { GET_PAGE_WITH_TRANSLATION, GET_SERIES_MENU } from "@/lib/queries";

// parser
import { Parser } from "html-to-react";

export default function Page({ locale, paths }: any) {
    const [loading, setLoading] = useState(true);
    const [pageContent, setPageContent] = useState<any>();

    const slug = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const client = apolloClient();
            const { data } = await client.query({
                query: GET_PAGE_WITH_TRANSLATION,
                variables: {
                    uri: slug.query.slug,
                    language: locale ? locale.toUpperCase() : "BG",
                },
            });
            setPageContent(data);
            setLoading(false);
        };
        fetchData();
    }, [locale, slug]);

    if (loading) {
        return (
            <div className={styles.TempContainer}>
                <div className={spinnerStyle.Spinner}></div>
            </div>
        );
    }

    if (!pageContent?.pageBy?.translations?.[0].translation?.content) {
        return (
            <div className={styles.TempContainer}>
                <h2>Error</h2>
            </div>
        );
    }

    return (
        <div className={styles.aurumWrapper}>
            <div className={styles.aurumContainer}>
                <div className={styles.aurumText}>
                    {Parser().parse(
                        pageContent?.pageBy?.translations?.[0].translation
                            ?.content
                    )}
                </div>
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
            ...(await serverSideTranslations(locale, [
                "common",
                "header",
                "series-znag",
            ])),
            locale,
        },
    };
}

export async function getStaticPaths() {
    const client = apolloClient();
    const { data } = await client.query({
        query: GET_SERIES_MENU,
    });

    // Extract the slugs and generate paths for both locales
    const paths = data.menuItems.nodes
        .map((node: any) => {
            return [
                { params: { slug: node.label.toLowerCase() }, locale: "en" },
                { params: { slug: node.label.toLowerCase() }, locale: "bg" },
            ];
        })
        .flat();

    return {
        paths,
        fallback: false, // or 'blocking' or true, depending on your preference
    };
}
