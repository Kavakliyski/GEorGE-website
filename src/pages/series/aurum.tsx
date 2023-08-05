// next
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";
import { Trans } from "next-i18next";
import Image from "next/image";

// styles
import styles from "@/styles/pages/series/aurum.module.scss";

export default function Aurum() {
    const { t } = useTranslation("series-aurum");

    return (
        <div className={styles.aurumWrapper}>
            <div className={styles.aurumContainer}>
                <div className={styles.aurumText}>
                    <p className={styles.textCard}>
                        <Trans i18nKey={t("paragraph1")} />
                    </p>

                    <p className={styles.textCard}>
                        <Image
                            width={1000}
                            height={1000}
                            alt=""
                            src={"/static/aurum/aurum.jpg"}
                        />
                    </p>

                    <p className={styles.textCard}>
                        <Trans i18nKey={t("paragraph2")} />
                    </p>
                    <p className={styles.textCard}>
                        <Trans i18nKey={t("paragraph3")} />
                    </p>

                    <p className={styles.textCard}>
                        <Trans i18nKey={t("paragraph4")} />
                    </p>

                    <p className={styles.textCard}>
                        <Image
                            width={1000}
                            height={1000}
                            alt=""
                            src={"/static/aurum/serii-aurum.jpg"}
                        />
                    </p>

                    <p className={styles.textCard}>
                        <Trans i18nKey={t("paragraph5")} />
                    </p>
                    <p className={styles.textCard}>
                        <Trans i18nKey={t("paragraph6")} />
                    </p>
                    <p className={styles.textCard}>
                        <Trans i18nKey={t("paragraph7")} />
                    </p>
                    <p className={styles.textCard}>
                        <Trans i18nKey={t("paragraph8")} />
                    </p>
                    <p className={styles.textCard}>
                        <Trans i18nKey={t("paragraph9")} />
                    </p>
                    <p className={styles.textCard}>
                        <Trans i18nKey={t("paragraph10")} />
                    </p>
                    <p className={styles.textCard}>
                        <Trans i18nKey={t("paragraph11")} />
                    </p>
                    <p className={styles.textCard}>
                        <Trans i18nKey={t("paragraph12")} />
                    </p>
                    <p className={styles.textCard}>
                        <Trans i18nKey={t("paragraph13")} />
                    </p>
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
                "series-aurum",
            ])),
        },
    };
}
