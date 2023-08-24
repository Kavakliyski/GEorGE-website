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
}) => (
    <div>
        <h2>Име {firstName}</h2>
        <h2>Фамилия: {lastName}</h2>
        <h2>Имейл адрес: {email}</h2>
        <h2>Адрес: {address}</h2>
        <h2>Телефон: {phoneNumber}</h2>
        <h2>
            Бележки към поръчката: <p>{notes}</p>
        </h2>
        <h2>Пордукти в количка </h2>
        <ul>
            {cartProducts.map((product) => (
                <li key={product.id}>
                    {product.name} - {product.price}лв - {product.count} броя/й = {product.price * product.count}лв
                </li>
            ))}
        </ul>
        <h1>Обща стойснот на поръчката {totalSum}лв</h1>
    </div>
);
