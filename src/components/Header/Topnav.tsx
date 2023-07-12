import { useTranslation } from "next-i18next";
import stlyes from "./Topnav.module.scss";
import axios from "axios";

export default function Topnav() {
    const { t: translate } = useTranslation("header");

    return (
        <div className={stlyes.TopnavContainer}>
            <div className={stlyes.TopnavText}>{translate("topnav")}</div>
        </div>
    );
}
