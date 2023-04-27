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
import { CartContextProvider } from '@/context/CartContext';
import { InternalizationContextProvider } from '@/context/InternalizationContext';


function App({ Component, pageProps }: AppProps) {


    return (
        <>
            <InternalizationContextProvider>
                <CartContextProvider>
                    <Topnav />
                    <Header />
                    <Navbar />
                    <Component {...pageProps} />
                    <Footer />
                </CartContextProvider>
            </InternalizationContextProvider>
        </>
    )
}

export default appWithTranslation(App);
