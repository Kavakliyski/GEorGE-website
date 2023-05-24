// next
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';

// styles
import '@/styles/globals.scss';

// Layout Components
import Topnav from '@/components/Header/Topnav';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Navbar } from '@/components/Header/Navbar';
import { CartContextProvider } from '@/context/CartContext';
import { InternalizationContextProvider } from '@/context/InternalizationContext';
import { Drawer } from '@/components/Drawer/Drawer';


function App({ Component, pageProps }: AppProps) {


    return (
        <>
            <Head>
                <link rel="Website Icon" type="png" href="favicon.png" />
            </Head>
            <InternalizationContextProvider>
                <CartContextProvider>
                    <Topnav />
                    <Header />
                    <Navbar />
                    <Drawer />
                    <Component {...pageProps} />
                    <Footer />
                </CartContextProvider>
            </InternalizationContextProvider>
        </>
    )
}

export default appWithTranslation(App);
