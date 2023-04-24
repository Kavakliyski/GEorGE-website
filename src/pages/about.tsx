import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next/types";

export default function about() {

    const {t: translate} = useTranslation('about')

    return (
        <div>
            <h1>{translate('about')}</h1>
        </div>
    )
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const { locale } = context;

    if (!locale) {
        throw new Error('Locale is not available in context');
    }

    return {
        props: {
            ... (await serverSideTranslations(locale, ['about']))
        }
    }
}
