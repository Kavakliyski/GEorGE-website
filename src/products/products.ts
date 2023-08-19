import { IProduct } from "@/interfaces/Iproducts"

export const georgeProducts: IProduct[] = [
    {
        id: 1,
        name: "product1_title",
        shorterDescription: "product1_shorterDescription",
        shortDescription: "product1_shortDescription",
        description: "product1_description",
        price: 240.00,
        imageUrl: "/productsIMG/2/produkt-crem.jpg",
        slug: "cream",
        instructions_for_use: "product1_instructions_for_use",
        storage_conditions: "product1_storage_conditions",
        benefits: "product1_benefits",
        key_ingredients: "product1_key_ingredients",
        quantity: "50",
    },
    {
        id: 2,
        name: "Серум за интензивно подмладяване на GEorGE",
        shorterDescription: "product2_shorterDescription",
        shortDescription: "prodcut2_shortDescription",
        description: "product2_description",
        price: 160.00,
        imageUrl: "/productsIMG/1/produkt-serum.jpg",
        slug: "serum",
        instructions_for_use: "product2_instructions_for_use",
        storage_conditions: "product2_storage_conditions",
        benefits: "product2_benefits",
        key_ingredients: "product2_key_ingredients",
        quantity: "50",
    }
]