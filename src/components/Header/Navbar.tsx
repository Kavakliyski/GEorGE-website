import styles from "./Navbar.module.scss";

import CartSVGBlack from "../../../public/icons/cart-black.svg"
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from 'next-i18next'

import LogoImage from "../../../public/static/george-aurum.png";
import { InternalizationContext } from "@/context/InternalizationContext";
import { CartContext } from "@/context/CartContext";


export const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false);
    const { setIsDrawerOpen } = useContext(CartContext);

    const { t: translate } = useTranslation('header');

    const { isLanguagesActive, push } = useContext(InternalizationContext)



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
            <div className={styles.NavbarContainer}>

                <div className={styles.LanguageButton}>
                    <button
                        className={isLanguagesActive("bg") ? styles.Active : ''}
                        onClick={() => push('/', undefined, { locale: "bg" })}
                    >BG</button>
                    |
                    <button
                        className={isLanguagesActive("en") ? styles.Active : ''}
                        onClick={() => push('/', undefined, { locale: "en" })}
                    >EN</button>
                </div>

                <div className={styles.NavbarLinksLeft}>
                    <ul>
                        <li>
                            <Link href="/">{translate('home')}</Link>
                        </li>
                        <li>
                            <Link href="/about">{translate('about')}</Link>
                        </li>
                        <li>
                            <Link href="/foryou">{translate('foryou')}</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.NavbarLinksMiddle}>
                    <Image
                        src={LogoImage}
                        alt=""
                        width={100}
                    />
                </div>

                <div className={styles.NavbarLinksRight}>
                    <ul>
                        <li>
                            <Link href="/products">{translate('products')}</Link>
                        </li>
                        <li>
                            <Link href="/series">{translate('series')}</Link>
                        </li>
                        <li>
                            <Link href="/reviews">{translate('reviews')}</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.ShoppingCart} >
                    <Image
                        src={CartSVGBlack} alt='' width={50}
                        onClick={() => setIsDrawerOpen(true)} />
                </div>

            </div>
        </nav>
    )
}