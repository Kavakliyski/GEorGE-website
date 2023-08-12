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
        </div>
    );
}
