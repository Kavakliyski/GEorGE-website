import Image from "next/image";

import styles from "./FeaturedProducts.module.scss";

export const FeaturedProducts = () => {
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
                                Необходимият лукс за Нейно Величество Кожата
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
                            <h2>24-каратова красота 7 дни в седмицата</h2>
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
                            <h2>Ефирност, нежност и деликатност</h2>
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
                            <h2>Магия за Вашето щастие</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
