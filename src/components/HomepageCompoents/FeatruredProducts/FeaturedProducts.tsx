import Image from "next/image";
import { Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import styles from "./FeaturedProducts.module.scss";

export const FeaturedProducts = () => {
    // <Trans i18nKey={t("paragraph3")} />
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
                            src={"/static/featureProducts/nach-str-za-vas.jpg"}
                        />
                    </div>
                    <div className={styles.BoxContent}>
                        <div>
                            <h2>
                                <Trans i18nKey={t("box1")} />
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
                                <Trans i18nKey={t("box2")} />
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
                                <Trans i18nKey={t("box3")} />
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
                                <Trans i18nKey={t("box4")} />
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
