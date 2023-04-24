import { useRouter } from 'next/router'

import styles from './Header.module.scss'


export default function Header() {

    const { locale, locales, push } = useRouter();

    const handleClick = (l: any) => {

        push('/', undefined, { locale: l })
    };

    return (

        <header className={styles.header}>
            <nav>
                <h1>Header.tsx</h1>
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
                <h3 onClick={() => push('/about')}>About</h3>
            </nav>
        </header>
    )
}
