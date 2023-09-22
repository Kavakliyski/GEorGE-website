// next
import { useTranslation } from "next-i18next";

// partners
import { partners } from "@/partners/partners";

// styles
import styles from "./Sonsors.module.scss";

export default function Sponsors() {
    const { t: translate } = useTranslation("common");

    return (
        <div className={styles.SponsorsWrapper}>
            <h2>{translate("partnersTitle")}</h2>

            <div className={styles.SponsorsCardContainer}>
                {partners.map((partner: any, index: number) => (
                    <div className={styles.SponsorsCard} key={partner.id}>
                        <h3>{partner.title}</h3>
                        <h4>{partner.name}</h4>
                        <h5>{partner.address}</h5>
                        <a
                            href={`https://${partner.href}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {partner.href}
                        </a>
                        <a href={`tel:${partner.number}`}>{partner.number}</a>
                        <a href={`mailto: ${partner.email}`}>{partner.email}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}
