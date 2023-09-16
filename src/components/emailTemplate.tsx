import * as React from "react";

interface CartProduct {
    id: number;
    name: string;
    shorterDescription: string;
    shortDescription: string;
    description: string;
    price: number;
    imageUrl: string;
    slug: string;
    instructions_for_use: string;
    storage_conditions: string;
    benefits: string;
    key_ingredients: string;
    quantity: string;
    count: number;
    product_name: string;
}

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    phoneNumber: string;
    notes: string;
    cartProducts: CartProduct[];
    totalSum: number;
    invoice: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    lastName,
    email,
    address,
    phoneNumber,
    notes,
    cartProducts,
    totalSum,
    invoice,
}) => (
    <div>
        <h3>Име: {firstName}</h3>
        <h3>Фамилия: {lastName}</h3>
        <h3>Имейл адрес: {email}</h3>
        <h3>Адрес: {address}</h3>
        <h3>Телефон: {phoneNumber}</h3>
        <h3>
            Фактура: {invoice ? "Да, желая фактура" : "Не, не желая фактура"}
        </h3>
        <h3>
            Бележки към поръчката: <br /> <p>{notes}</p>
        </h3>
        <h3>Пордукти в количка </h3>
        <ul>
            {cartProducts.map((product) => (
                <li key={product.id}>
                    {product.product_name} - {product.price}лв - {product.count}{" "}
                    броя/й = {product.price * product.count}лв
                </li>
            ))}
        </ul>
        <h1>Обща стойснот на поръчката {totalSum}лв</h1>
    </div>
);
