import Image from "next/image";
import { Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import styles from "./FeaturedProducts.module.scss";

export const FeaturedProducts = () => {
    const { t } = useTranslation("common");

    return (
        <div className={styles.FeaturedProductsWrapper}>
            <div className={styles.FeaturedProductsContainer}>
                <div className={styles.Box}>
                    <div className={styles.ImageBox}>
                        <Image
                            width={1000}
                            height={1000}
                            alt=""
                            src={"/static/featureProducts/06.jpg"}
                        />
                    </div>
                    <div className={styles.BoxContent}>
                        <div>
                            <h2>
                                <Link href={"/product/cream"}>
                                    <Trans i18nKey={t("box1")} />
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className={styles.Box}>
                    <div className={styles.ImageBox}>
                        <Image
                            width={1000}
                            height={1000}
                            alt=""
                            src={"/static/featureProducts/nach-str-cream.jpg"}
                        />
                    </div>
                    <div className={styles.BoxContent}>
                        <div>
                            <h2>
                                <Link href={"/product/cream"}>
                                    <Trans i18nKey={t("box2")} />
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className={styles.Box}>
                    <div className={styles.ImageBox}>
                        <Image
                            width={1000}
                            height={1000}
                            alt=""
                            src={"/static/featureProducts/nach-str-serum.jpg"}
                        />
                    </div>
                    <div className={styles.BoxContent}>
                        <div>
                            <h2>
                                <Link href={"/product/serum"}>
                                    <Trans i18nKey={t("box3")} />
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className={styles.Box}>
                    <div className={styles.ImageBox}>
                        <Image
                            width={1000}
                            height={1000}
                            alt=""
                            src={"/static/featureProducts/nach-stra-mnenia.jpg"}
                        />
                    </div>
                    <div className={styles.BoxContent}>
                        <div>
                            <h2>
                                <Link href={"/product/serum"}>
                                    <Trans i18nKey={t("box4")} />
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
