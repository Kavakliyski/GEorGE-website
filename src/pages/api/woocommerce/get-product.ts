import type { NextApiRequest, NextApiResponse } from "next";

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
    consumerKey: process.env.WC_CONSUMER_KEY,
    consumerSecret: process.env.WC_CONSUMER_SECRET,
    version: "wc/v3",
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const responseData = {
        success: false,
        product: [],
        error: "",
    };

    try {
        const { slug } = req.query;

        if (!slug) {
            throw new Error("Product SLUG is missing");
        }

        const { data } = await api.get(`products?slug=${slug}`);

        responseData.success = true;
        responseData.product = data;

        res.json(responseData);
    } catch (err: any) {
        responseData.error = err.message;
        res.status(500).json(responseData);
    }
}
