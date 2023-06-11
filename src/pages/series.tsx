import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticPropsContext } from 'next'
import Head from "next/head";


export default function series() {


    return (
        <>
            <Head>
                <title>GEorGE • Cosmetic • Series</title>
            </Head>


            <div>
                <h1>series</h1>
                <h1>series</h1>
                <h1>series</h1>
                <h1>series</h1>
                <h1>series</h1>
                <h1>series</h1>
                <h1>series</h1>
                <h1>series</h1>
                <h1>series</h1>
                <h1>series</h1>
                <h1>series</h1>
                <h1>series</h1>
                <h1>series</h1>
                <h1>series</h1>
                <h1>series</h1>
                <h1>series</h1>
                <h1>series</h1>
                <h1>series</h1>
                <h1>series</h1>
                <h1>series</h1>
                <h1>series</h1>
                <h1>series</h1>
                <h1>series</h1>
            </div>
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
            ... (await serverSideTranslations(locale, ['common', 'header']))
        }
    }
}
