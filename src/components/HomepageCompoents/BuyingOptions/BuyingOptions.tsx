import styles from "./BuyingOptions.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Trans } from "next-i18next";

type BoxProps = {
    text: string;
    phone?: string;
    href?: string;
    subtext?: string;
};

function Box({ text, phone, href, subtext }: BoxProps) {
    return (
        <div className={styles.Box}>
            {href ? <Link href={href}>{text}</Link> : <div>{text}</div>}
            {subtext && <div><Trans i18nKey={subtext}/></div>}
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
                <Box text={translate("addr")} />
                <Box text={translate("buysponsors")} />
                <Box text={translate("orderbyphone")} phone={"0876 570 471"} />
                <Box
                    text={translate("orderonline")}
                    href={"/shop"}
                    subtext={"orderonline2"}
                />
            </div>
        </div>
    );
}
