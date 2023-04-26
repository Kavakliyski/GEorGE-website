import Image from "next/image";
import styles from "./Navbar.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";

import LogoImage from "../../../public/static/george-aurum.png";


export const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={showNavbar ? styles.NavbarWrapperVisible : styles.NavbarWrapper}>
            <div className={styles.NavbartContainer}>

                <div className={styles.NavbarLinksLeft}>
                    <ul>
                        <li>
                            <Link href="/">test1</Link>
                        </li>
                        <li>
                            <Link href="/">tekst2</Link>
                        </li>
                        <li>
                            <Link href="/">tekst3</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.NavbarLinksMiddle}>
                    <Image src={LogoImage} alt="" width={200} />
                </div>

                <div className={styles.NavbarLinksRight}>
                    <ul>
                        <li>
                            <Link href="/">test1</Link>
                        </li>
                        <li>
                            <Link href="/">tekst2</Link>
                        </li>
                        <li>
                            <Link href="/">tekst3</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}
