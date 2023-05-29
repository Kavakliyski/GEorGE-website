import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import styles from '@/styles/pages/404.module.scss'
import { useTranslation } from 'next-i18next';



export default function Custom404() {
    
    const { t: translate } = useTranslation('common');
    
    
    return (
        <div className={styles.NotFoundPageWrapper}>
            <h1>{translate('Heading404')}</h1>
            <h2>{translate('SubHeading404')}</h2>
            <h2>{translate('Sub2Heading404')}</h2>
        </div>
    );
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
