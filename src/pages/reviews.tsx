import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { Trans, useTranslation } from "next-i18next";
import Image from "next/image";

import styles from "@/styles/pages/reviews.module.scss";

import { reviews } from "@/reviews/reviews";

export default function Reviews() {
    const { t: translate } = useTranslation("header");
    const { t: translateReview } = useTranslation("reviews");

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
                                <div className={styles.text}>
                                    <h2>
                                        <Trans
                                            i18nKey={translateReview(
                                                review.name
                                            )}
                                        />
                                    </h2>
                                    <p>
                                        <Trans
                                            i18nKey={translateReview(
                                                review.text
                                            )}
                                        />
                                    </p>
                                </div>

                                <div className={styles.Images}>
                                    {review.img &&
                                        review.img.map((src, index) => (
                                            <Image
                                                key={index}
                                                alt=""
                                                width={100}
                                                height={100}
                                                src={src}
                                            />
                                        ))}
                                </div>
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
            ...(await serverSideTranslations(locale, [
                "common",
                "header",
                "reviews",
            ])),
        },
    };
}
