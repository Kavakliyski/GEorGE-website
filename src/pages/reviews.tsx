import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import styles from "@/styles/pages/reviews.module.scss";

import { reviews } from "@/reviews/reviews";

export default function Reviews() {
    const { t: translate } = useTranslation("header");

    return (
        <>
            <Head>
                <title>GEorGE • Cosmetic • Reviews</title>
            </Head>

            <div className={styles.reviewsWrapper}>
                <div className={styles.reviewsContainer}>
                    <Image
                        width={200}
                        height={200}
                        alt=""
                        src={"/favicon.png"}
                    />
                    <h1>{translate("reviews")}</h1>
                    <div className={styles.Reviews}>
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className={styles.singleReview}
                                style={{
                                    animationDelay: `${0.5 + index * 0.5}s`,
                                }}
                            >
                                <h2>{review.name}</h2>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: review.text,
                                    }}
                                />
                            </div>
                        ))}
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
            ...(await serverSideTranslations(locale, ["common", "header"])),
        },
    };
}
