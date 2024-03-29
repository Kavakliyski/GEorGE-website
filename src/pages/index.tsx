// next
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";

// components
import { FeaturedProducts } from "@/components/HomepageCompoents/FeatruredProducts/FeaturedProducts";
// import { HeroBanner } from "@/components/HomepageCompoents/HeroBanner/HeroBanner";
import Slider from "@/components/HomepageCompoents/HomeSlider/Slider";
import Sponsors from "@/components/HomepageCompoents/SponsorsBanner/Sponsors";
import BuyingOptions from "@/components/HomepageCompoents/BuyingOptions/BuyingOptions";

export default function Home() {
    const { t: translate } = useTranslation("common");

    return (
        <>
            <main>
                <Slider />
                <FeaturedProducts />
                {/* <HeroBanner /> */}
                <Sponsors />
                <br />
                <BuyingOptions />
                <br />
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
