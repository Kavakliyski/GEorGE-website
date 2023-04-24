import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './Header.module.scss';
import Image from 'next/image';

// img
import GeorgeLogo from "../../../public/static/george-aurum.png";
import GeorgeLogoText from "../../../public/static/george_thumbnail.png";
import GeorgeLogoText2 from "../../../public/static/george.png";

export default function Header() {

    const { locale, locales, push } = useRouter();
    const router = useRouter();

    const isActive = (href: string) => router.pathname === href;

    const handleClick = (l: any) => {

        push('/', undefined, { locale: l })
    };

    return (

        <header>
            <nav>
                {/* <h1>Header.tsx</h1>
                <h2>{locale}</h2>
                <p>
                    {
                        locales?.map(l => (
                            <button key={l} onClick={() => handleClick(l)}>
                                {l}
                            </button>
                        )
                        )
                    }
                </p>
                <h3 onClick={() => push('/about')}>About</h3> */}

                <div className={styles.NavigationWrapper}>
                    <div className={styles.NavigationContainer}>

                        <div className={styles.NavigatioLeftLinks}>
                            <Image src={GeorgeLogoText2} alt={''} width={400} />
                        </div>

                        <div className={styles.NavigatioMiddleLinks}>

                            <div className={styles.NavigationLinksContainer}>
                                <li className={isActive('/') ? styles.active : ''}>
                                    <Link href="/">Home</Link>
                                </li>
                                <li className={isActive('/about') ? styles.active : ''}>
                                    <Link href="/about">About</Link>
                                </li>
                                <li className={isActive('/about') ? styles.active : ''}>
                                    <Link href="/about">About</Link>
                                </li>
                                <li className={isActive('/about') ? styles.active : ''}>
                                    <Link href="/about">About</Link>
                                </li>
                                <li className={isActive('/about') ? styles.active : ''}>
                                    <Link href="/about">About</Link>
                                </li>
                            </div>
                        </div>

                        <div className={styles.NavigatioRightLinks}>
                            <p>BG / EN</p>
                            <p>Cart</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
