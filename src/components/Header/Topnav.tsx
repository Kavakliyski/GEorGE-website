// import Image from "next/image"
import { useTranslation } from "next-i18next"
import stlyes from "./Topnav.module.scss"

// icons
// import FacebookIcon from "../../../public/icons/facebook.svg"
// import InstagramIcon from "../../../public/icons/instagram.svg"
// import YoutubeIcon from "../../../public/icons/youtube.svg"
// import PhoneIcon from "../../../public/icons/phone.svg"
// import EmailIcon from "../../../public/icons/email.svg"


export default function Topnav() {

    const { t: translate } = useTranslation('header')


    return (
        <div className={stlyes.TopnavContainer}>
            <div className={stlyes.TopnavText}>
                {translate('topnav')}
            </div>
        </div>
    )
}
    