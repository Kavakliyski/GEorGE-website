// styles
import styles from "@/styles/pages/reviews.module.scss";

// next
import Head from "next/head";
import Image from "next/image";
import { GetStaticPropsContext } from "next";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// apollo, gql
import apolloClient from "@/lib/apollo-client";
import { GET_REVIEWS } from "@/lib/queries";

//interface

export default function Reviews({ reviews, locale }: any) {
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
                        {reviews.map((review: any, index: number) => (
                            <div
                                className={styles.singleReview}
                                key={index}
                                style={{
                                    animationDelay: `${0.5 + index * 0.5}s`,
                                }}
                            >
                                {locale === "en" ? (
                                    <>
                                        <h2>{review.acfReviews.nameEn}</h2>
                                        <p>{review.acfReviews.textEn}</p>
                                    </>
                                ) : (
                                    <>
                                        <h2>{review.acfReviews.nameBg}</h2>
                                        <p>{review.acfReviews.textBg}</p>
                                    </>
                                )}

                                {review?.acfReviews?.image1 && (
                                    <Image
                                        alt=""
                                        width={500}
                                        height={500}
                                        src={review.acfReviews.image1.sourceUrl}
                                    />
                                )}
                                {review?.acfReviews?.image2 && (
                                    <Image
                                        alt=""
                                        width={500}
                                        height={500}
                                        src={review.acfReviews.image2.sourceUrl}
                                    />
                                )}
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
    const client = apolloClient();

    const { data } = await client.query({
        query: GET_REVIEWS,
    });

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
            reviews: data.posts.nodes,
            locale: locale,
            revalidate: 60,
        },
    };
}
