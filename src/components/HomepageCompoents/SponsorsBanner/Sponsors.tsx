// next
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// styles
import styles from "./Sonsors.module.scss";

export default function Sponsors() {
    const { t: translate } = useTranslation("common");

    return (
        <div className={styles.SponsorsWrapper}>
            <h2>{translate("partnersTitle")}</h2>

            <div className={styles.SponsorsCardContainer}>
                <div className={styles.SponsorsCard}>
                    <h3>“Мирая 09 “-ЕООД гр.Варна </h3>
                    <h4>Тихомира Илиева Янакиева</h4>
                    <a href="tel:0898577280">0898577280</a>
                    <a href="mailto: tihomira.yanakieva13@abv.bg">
                        tihomira.yanakieva13@abv.bg
                    </a>
                </div>
            </div>
        </div>
    );
}
