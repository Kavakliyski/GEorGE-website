import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next';

// styles
import '@/styles/globals.scss';

// Layout Components
import Topnav from '@/components/Header/Topnav';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

// i18n


function App({ Component, pageProps }: AppProps) {


  return (

    <>
        <Topnav />
        <Header />
        <Component {...pageProps} />
        <Footer />
    </>
  )
}

export default appWithTranslation(App);
