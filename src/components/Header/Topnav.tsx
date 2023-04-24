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
                <div className={stlyes.TopnavLeftLinks}>

                    <div>
                        <a href="mailto: info@george-cosmetics.bg">
                            <Image src={EmailIcon} alt={"email"} width={35} />
                            info@george-cosmetics.bg
                        </a>
                    </div>

                    <strong> | </strong>

                    <div>
                        <a href="tel: +359 888 999 777">
                            <Image src={PhoneIcon} alt={"phone"} width={35} />
                            +359 888 999 777
                        </a>
                    </div>

                </div>
                <div className={stlyes.TopnavRightLinks}>
                    <div className="facebook"><Image src={FacebookIcon} alt={"facebook"} width={38} /></div>
                    <div className="youtube"><Image src={YoutubeIcon} alt={"youtube"} width={40} /></div>
                    <div className="instagram"><Image src={InstagramIcon} alt={"instagram"} width={35} /></div>
                </div>
            </div>
        </div>
    )
}
