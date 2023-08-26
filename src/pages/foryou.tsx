import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { Trans } from "next-i18next";
import Image from "next/image";

import styles from "@/styles/pages/foryou.module.scss";

export default function Foryou() {
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
                        <ul>
                            <li>
                                <Trans i18nKey={t("li1")} />
                            </li>
                            <li>
                                <Trans i18nKey={t("li2")} />
                            </li>
                            <li>
                                <Trans i18nKey={t("li3")} />
                            </li>
                            <li>
                                <Trans i18nKey={t("li4")} />
                            </li>
                            <li>
                                <Trans i18nKey={t("li6")} />
                            </li>
                            <li>
                                <Trans i18nKey={t("li5")} />
                            </li>
                            <li>
                                <Trans i18nKey={t("li7")} />
                            </li>
                            <li>
                                <Trans i18nKey={t("li8")} />
                            </li>
                            <li>
                                <Trans i18nKey={t("li9")} />
                            </li>
                            <li>
                                <Trans i18nKey={t("li10")} />
                            </li>
                        </ul>
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
                "foryou",
            ])),
        },
    };
}
