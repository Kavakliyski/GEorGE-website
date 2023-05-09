
import styles from "./Navbar.module.scss";

// next
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'next-i18next'

// assets
import CartSVGBlack from "../../../public/icons/cart-black.svg"
import LogoImage from "../../../public/static/george-aurum.png";

// context
import { InternalizationContext } from "@/context/InternalizationContext";
import { CartContext } from "@/context/CartContext";


export const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false);
    const { setIsDrawerOpen } = useContext(CartContext);

    const { t: translate } = useTranslation('header');

    const { isLanguagesActive, push } = useContext(InternalizationContext)

    const [isMenuOpen, setIsMenuOpen] = useState(false);


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

                <div className={styles.BurgerMenu}>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <div className={`${styles.BurgerIcon} ${isMenuOpen ? styles.Open : ""}`}>
                            <span />
                            <span />
                            <span />
                        </div>
                    </button>
                </div>

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
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '50%', height: 'auto' }}
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

                <div className={`${isMenuOpen ? styles.MenuItems : styles.LinkIsInvisible}`}>
                    <ul>
                        <li><Link href="/">{translate('home')}</Link></li>
                        <li><Link href="/about">{translate('about')}</Link></li>
                        <li><Link href="/foryou">{translate('foryou')}</Link></li>
                        <li><Link href="/products">{translate('products')}</Link></li>
                        <li><Link href="/series">{translate('series')}</Link></li>
                        <li><Link href="/reviews">{translate('reviews')}</Link></li>
                    </ul>

                    <div className={styles.LanguageButtonMobile}>
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
