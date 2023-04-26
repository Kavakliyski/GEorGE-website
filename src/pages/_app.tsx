// next
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next';

// styles
import '@/styles/globals.scss';

// Layout Components
import Topnav from '@/components/Header/Topnav';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Navbar } from '@/components/Header/Navbar';


function App({ Component, pageProps }: AppProps) {


    return (
        <>
            <Topnav />
            <Header />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default appWithTranslation(App);
