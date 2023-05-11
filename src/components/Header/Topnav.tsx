import Image from "next/image"
import stlyes from "./Topnav.module.scss"

// icons
import FacebookIcon from "../../../public/icons/facebook.svg"
import InstagramIcon from "../../../public/icons/instagram.svg"
import YoutubeIcon from "../../../public/icons/youtube.svg"
import PhoneIcon from "../../../public/icons/phone.svg"
import EmailIcon from "../../../public/icons/email.svg"


export default function Topnav() {


    return (
        <div className={stlyes.TopnavContainer}>
            <div className={stlyes.TopnavText}>
                <p>За нейно величесто кожата</p>
            </div>
        </div>
    )
}
