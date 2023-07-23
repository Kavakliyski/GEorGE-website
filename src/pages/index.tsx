// next
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";

// components
import { FeaturedProducts } from "@/components/HomepageCompoents/FeatruredProducts/FeaturedProducts";
import { HeroBanner } from "@/components/HomepageCompoents/HeroBanner/HeroBanner";

export default function Home() {
    const { t: translate } = useTranslation("common");

    return (
        <>
            <main>
                <HeroBanner />
                <FeaturedProducts />
                <HeroBanner />
            </main>
        </>
    );
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const { locale } = context;

    if (!locale) {
        throw new Error("Locale is not available in context");
    }

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "header"])),
        },
    };
}
