// next
import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import Script from "next/script";

// styles
import "@/styles/globals.scss";

// Layout Components
import Topnav from "@/components/Header/Topnav";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Navbar } from "@/components/Header/Navbar";
import { CartContextProvider } from "@/context/CartContext";
import { InternalizationContextProvider } from "@/context/InternalizationContext";
import { Drawer } from "@/components/Drawer/Drawer";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>GEorGE • Cosmetic</title>
                <meta charSet="UTF-8" />
                <link rel="shortcut icon" href="/favicon.png" />
                <link rel="Website Icon" type="png" href="/favicon.png" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon.png"
                />

                <meta name="theme-color" content="#191716" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <meta name="az197" content="GEorGe Cosmetics" />
                <meta
                    name="description"
                    content="Брандът GEorGE е създаден въз основа на иновативните технологии в световната козметична индустрия. Смело можем да твърдим, че ние сме революционери в разработването на собствени натурални продукти с колоидно злато, колоидно сребро и хидролизиран хиалурон, които от своя страна действат на дълбоко клетъчно ниво и подпомагат регенерацията на кожата."
                />
                <meta name="keywords" content="keyword1, keyword2, keyword3" />
            </Head>

            <Script id="Google tag Manager">
                {/* Google tag Manager */}
                {`
                    (function(w,d,s,l,i){
                        w[l]=w[l]||[];
                        w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                        var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                        j.async=true;
                        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                        f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-PC3ZHPZB');
                `}
            </Script>

            <Script
                id="Google tag Manager2"
                src="https://www.googletagmanager.com/gtag/js?id=G-EY5V50HHTF"
                strategy="lazyOnload"
            />
            <Script id="Google tag Manager3" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-EY5V50HHTF');
                `}
            </Script>

            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-PC3ZHPZB"
                    style={{ display: "none", visibility: "hidden" }}
                ></iframe>
            </noscript>

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
    );
}

export default appWithTranslation(App);
