// next
import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

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
