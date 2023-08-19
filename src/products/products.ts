import { IProduct } from "@/interfaces/Iproducts"

export const georgeProducts: IProduct[] = [
    {
        id: 1,
        name: "product1_title",
        shorterDescription: "product1_shorterDescription",
        shortDescription: "product1_shortDescription",
        description: "product1_description",
        price: 29.99,
        imageUrl: "/productsIMG/1/produkt-serum.jpg",
        slug: "serum",
        instructions_for_use: "product1_instructions_for_use",
        storage_conditions: "product1_storage_conditions",
        benefits: "product1_benefits",
        key_ingredients: "product1_key_ingredients",
        quantity: "50",
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