import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/components/emailTemplate";

const resend = new Resend("");

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
        } = req.body;

        console.log(req.body);

        try {
            const data = await resend.emails.send({
                from: "Поръчка <order@resend.dev>",
                to: ["george.customers.sender@gmail.com"],
                subject: "Нова Поръчка",
                react: EmailTemplate({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    address: address,
                    phoneNumber: phoneNumber,
                    notes: notes,
                    cartProducts: cartProducts,
                }),
            });

            res.status(200).json(data);
        } catch (error) {
            res.status(400).json(error);
        }
    }
};
