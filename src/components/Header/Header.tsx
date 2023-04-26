import styles from './Header.module.scss';

import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next'
import Link from 'next/link';
import Image from 'next/image';

// img
import GeorgeLogo from "../../../public/static/george-aurum.png";
import GeorgeLogoText from "../../../public/static/george_thumbnail.png";
import GeorgeLogoText2 from "../../../public/static/george.png";
import CartSVG from '../../../public/icons/cart.svg';


export default function Header() {

    const router = useRouter();

    const { locale, push } = useRouter();
    const { t: translate } = useTranslation('header');

    const isLinkActive = (href: string) => router.pathname === href;
    const isLanguagesActive = (value: string) => value === locale


    return (

        <header>
            <nav>
                <div className={styles.NavigationWrapper}>
                    <div className={styles.NavigationContainer}>

                        <div className={styles.NavigatioLeftLinks}>
                            <Image src={GeorgeLogoText2} alt={''} width={400} />
                        </div>

                        <div className={styles.NavigatioMiddleLinks}>

                            <div className={styles.NavigationLinksContainer}>
                                <li className={isLinkActive('/') ? styles.active : ''}>
                                    <Link href="/">{translate('home')}</Link>
                                </li>
                                <li className={isLinkActive('/about') ? styles.active : ''}>
                                    <Link href="/about">{translate('about')}</Link>
                                </li>
                                <li className={isLinkActive('/about') ? styles.active : ''}>
                                    <Link href="/about">{translate('products')}</Link>
                                </li>
                                <li className={isLinkActive('/about') ? styles.active : ''}>
                                    <Link href="/about">About</Link>
                                </li>
                                <li className={isLinkActive('/about') ? styles.active : ''}>
                                    <Link href="/about">About</Link>
                                </li>
                            </div>
                        </div>

                        <div className={styles.NavigatioRightLinks}>
                            <div className={styles.ShoppingCart}>
                                <Image src={CartSVG} alt='' width={50}/>
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
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
