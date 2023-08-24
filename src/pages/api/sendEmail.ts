import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/components/emailTemplate";

const resend = new Resend(process.env.RESEND_API);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        return res.status(200).json({ error: "use POST" });
    }

    if (req.method === "POST") {
        const {
            firstName,
            lastName,
            email,
            address,
            phoneNumber,
            notes,
            cartProducts,
            totalSum,
        } = req.body;

        const dateInBulgaria = new Date().toLocaleString("bg-BG", { timeZone: "Europe/Sofia" });

        try {
            const data = await resend.emails.send({
                from: "Поръчка <order@resend.dev>",
                to: ["george.customers.sender@gmail.com"],
                subject: `Нова Поръчка - ${dateInBulgaria} - ${firstName} ${lastName}`,
                react: EmailTemplate({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    address: address,
                    phoneNumber: phoneNumber,
                    notes: notes,
                    cartProducts: cartProducts,
                    totalSum: totalSum,
                }),
            });

            res.status(200).json(req.body);
        } catch (error) {
            res.status(400).json(error);
        }
    }
};
