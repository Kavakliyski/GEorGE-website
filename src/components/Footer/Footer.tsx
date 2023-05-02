import styles from './Footer.module.scss';

// icons
import PhoneSVG from "../../../public/icons/phoneBlack.svg"
import EmailSVG from "../../../public/icons/emailBlack.svg"
import Image from 'next/image';


export default function Footer() {


    return (
        <div className={styles.FooterWrapper}>
            <div className={styles.FooterContainer}>
                <div className={styles.FooterContacts}>
                    <h1>Контакти</h1>
                    <div className={styles.ContactsOnline}>
                        <Image src={PhoneSVG} alt='' width={30} />
                        <h2>+359 888 999 777</h2>
                    </div>
                    <div className={styles.ContactsOnline}>
                        <Image src={EmailSVG} alt='' width={30} />
                        <h2>info@george-cosmetics.bg</h2>
                    </div>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d257.2185094129571!2d23.3504891!3d42.7036217!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85807e4f948f%3A0xd3d8f1988e25505f!2sg.k.%20Hadzhi%20Dimitar%2055%D0%92%20%D0%91%2C%201510%20Hadzhi%20Dimitar%2C%20Sofia!5e1!3m2!1sen!2sbg!4v1683010167324!5m2!1sen!2sbg" width="400" height="300" loading="lazy" style={{ border: "none"}}></iframe>
                        <h2> кв. "Хаджи Димитър", бл. 55В, вх. Б</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
