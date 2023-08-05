import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Link from "next/link";

import styles from "@/styles/pages/series/index.module.scss";

export default function series() {
    return (
        <>
            <Head>
                <title>GEorGE • Cosmetic • Series</title>
            </Head>

            <div className={styles.seriesWrapper}>
                <div className={styles.seriesContainer}>
                    <Link href={"series/aurum"}>
                        <h1>AURUM</h1>
                    </Link>
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
            ...(await serverSideTranslations(locale, ["common", "header"])),
        },
    };
}
