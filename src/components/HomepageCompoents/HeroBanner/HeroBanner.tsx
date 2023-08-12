//images
import HeroImg from "../../../../public/static/george-jar10.jpg";
import Image from "next/image";

// styles
import styles from "./HeroBanner.module.scss"

export const HeroBanner = () => {


    return (
        <div className={styles.HeroBannerWrapper}>
            <div className={styles.HeroBannerContainer}>

                <Image
                    src={HeroImg}
                    alt=""
                    className="HeroBannneImage" />
            </div>
        </div>
    )
}
