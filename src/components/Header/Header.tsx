import styles from './Header.module.scss';

import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next'
import Link from 'next/link';
import Image from 'next/image';

// img
import GeorgeLogo from "../../../public/static/george-aurum.png";
import GeorgeLogoText from "../../../public/static/george_thumbnail.png";
import GeorgeLogoText2 from "../../../public/static/george.png";
import CartSVGWhite from '../../../public/icons/cart-white.svg';

import { InternalizationContext } from '@/context/InternalizationContext';
import { CartContext } from '@/context/CartContext';


export default function Header() {

    const router = useRouter();

    const { push } = useRouter();
    const { t: translate } = useTranslation('header');

    const isLinkActive = (href: string) => router.pathname === href;

    const { isLanguagesActive } = useContext(InternalizationContext);
    const { setIsDrawerOpen } = useContext(CartContext);

    const [isExpanded, setIsExpanded] = useState(false);
    console.log(isExpanded);

    return (


        <header>

            <nav>
                <div className={styles.NavigationWrapper}>
                    <div className={styles.NavigationContainer}>

                        <div className={styles.ExpandButton}>
                            <button onClick={() => setIsExpanded(!isExpanded)}>
                                <div className={`${styles.BurgerIcon} ${isExpanded ? "" : styles.Open}`}>
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </button>
                        </div>

                        <div className={styles.NavigatioLeftLinks}>
                            <Image src={GeorgeLogoText2} alt={''} width={400} />
                        </div>

                        <div className={`${isExpanded ? styles.NavigatioMiddleLinksExapnded : styles.NavigatioMiddleLinks}`}>

                            <div className={styles.NavigationLinksContainer}>
                                <ul>
                                    <li className={isLinkActive('/') ? styles.active : ''}>
                                        <Link href="/">{translate('home')}</Link>
                                    </li>
                                    <li className={isLinkActive('/about') ? styles.active : ''}>
                                        <Link href="/about">{translate('about')}</Link>
                                    </li>
                                    <li className={isLinkActive('/foryou') ? styles.active : ''}>
                                        <Link href="/foryou">{translate('foryou')}</Link>
                                    </li>
                                    <li className={isLinkActive('/products') ? styles.active : ''}>
                                        <Link href="/products">{translate('products')}</Link>
                                    </li>
                                    <li className={isLinkActive('/series') ? styles.active : ''}>
                                        <Link href="/series">{translate('series')}</Link>
                                    </li>
                                    <li className={isLinkActive('/reviews') ? styles.active : ''}>
                                        <Link href="/reviews">{translate('reviews')}</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.ShoppingCart}>
                            <Image src={CartSVGWhite} alt='' width={50} onClick={() => setIsDrawerOpen(true)} />
                        </div>

                        <div className={`${isExpanded ? styles.LanguageButtonExpanded : styles.LanguageButton}`}>
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
                </div>
            </nav>
        </header>
    )
}
