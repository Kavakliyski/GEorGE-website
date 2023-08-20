import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import styles from "@/styles/pages/coming_soon.module.scss";

export default function Anti_acne() {
    const { t: translate } = useTranslation("header");

    return (
        <div className={styles.CommingSoonWrapper}>
            <h1>{translate("coming_soon")}</h1>
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
