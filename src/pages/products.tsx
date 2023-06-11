import { GetStaticPropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from "next/head";


export default function products() {


    return (
        <>
            <Head>
                <title>GEorGE • Cosmetic • Products</title>
            </Head>


            <div>
                <h1>products</h1>
                <h1>products</h1>
                <h1>products</h1>
                <h1>products</h1>
                <h1>products</h1>
                <h1>products</h1>
                <h1>products</h1>
                <h1>products</h1>
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
