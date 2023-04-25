// next
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticPropsContext } from 'next'

// components
import { FeaturedProducts } from '@/components/HomepageCompoents/FeatruredProducts/FeaturedProducts'
import { HeroBanner } from '@/components/HomepageCompoents/HeroBanner/HeroBanner'


export default function Home() {

    const { locale, locales, push } = useRouter();
    const { t: translate } = useTranslation('common');


    const handleClick = (local: any) => {

        push('/', undefined, { locale: local })
    };

    return (
        <>
            <Head>
                <title>GEorGE • Cosmetic</title>
                <link rel="icon" href="/george.ico" />
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="UTF-8" />
                <meta name="az197" content="GEorGe Cosmetics" />
                {/* Keywords (specify relevant keywords related to your web page content for SEO): */}
                <meta name="keywords" content="keyword1, keyword2, keyword3" />
                {/* Theme color (specifies the color of the browser's address bar on some mobile devices): */}
                <meta name="theme-color" content="#bf8b00" />
            </Head>

            <main>
                <HeroBanner />
                <FeaturedProducts />
            </main>

        </>
    )
}


export async function getStaticProps(context: GetStaticPropsContext) {
    const { locale } = context;

    if (!locale) {
        throw new Error('Locale is not available in context');
    }

    return {
        props: {
            ... (await serverSideTranslations(locale, ['common']))
        }
    }
}
