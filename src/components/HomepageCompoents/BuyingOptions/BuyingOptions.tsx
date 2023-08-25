import styles from "./BuyingOptions.module.scss";
import { useTranslation } from "next-i18next";

type BoxProps = {
    text: string;
    phone?: string;
};

function Box({ text, phone }: BoxProps) {
    return (
        <div className={styles.Box}>
            <div>{text}</div>
            <div>
                <a href={`tel:${phone}`}>{phone}</a>
            </div>
        </div>
    );
}

export default function BuyingOptions() {
    const { t: translate } = useTranslation("common");

    return (
        <div className={styles.BuyingOptionsWrapper}>
            <h2>{translate("purchase_options")}</h2>
            <div className={styles.gridContainer}>
                <Box text={translate('addr')} />
                <Box text={translate("buysponsors")} />
                <Box text={translate("orderbyphone")} phone={"0876 570 471"} />
                <Box text={translate("orderonline")} />
            </div>
        </div>
    );
}
