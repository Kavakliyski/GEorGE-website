import { IProduct } from "@/interfaces/Iproducts"

export const georgeProducts: IProduct[] = [
    {
        id: 1,
        name: "Скулптуриращият крем за лице на GEorGE",
        description: "Description for Product 1",
        price: 29.99,
        imageUrl: "/productsIMG/1/produkt-serum.jpg",
        slug: "serum",
        shortDescription: "Скулптуриращият крем за лице на GEorGE от серията Aurum е предназначен за всеки тип кожа."
    },
    {
        id: 2,
        name: "Серум за интензивно подмладяване на GEorGE",
        description: "Description for Product 2",
        price: 29.99,
        imageUrl: "/productsIMG/2/produkt-crem.jpg",
        slug: "cream",
        shortDescription: "",
    }
]