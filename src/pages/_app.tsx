import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next';

// styles
import '@/styles/globals.scss';

// components
import Topnav from '@/components/Header/Topnav';
import Header from '@/components/Header/Header';

// i18n


function App({ Component, pageProps }: AppProps) {


  return (

    <>
      <Topnav />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(App);
