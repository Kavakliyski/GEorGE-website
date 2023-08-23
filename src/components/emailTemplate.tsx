import * as React from "react";

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    phoneNumber: string;
    notes: string;
    cartProducts: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    lastName,
    email,
    address,
    phoneNumber,
    notes,
    cartProducts,
}) => (
    <div>
        <h2>Име {firstName}</h2>
        <h2>Фамилия: {lastName}</h2>
        <h2>Имейл адрес: {email}</h2>
        <h2>Адрес: {address}</h2>
        <h2>Телефон: {phoneNumber}</h2>
        <h2>Бележки към поръчката {notes}</h2>
        <h2>Пордукти в количка {cartProducts}</h2>
    </div>
);
