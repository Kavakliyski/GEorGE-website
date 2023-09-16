export interface IProduct {
    id: number;
    page?: string;
    product_name?: string;
    name: string;
    description: string;
    price: number;
    imageUrl?: string;
    slug: string;
    shortDescription: string;
    instructions_for_use?: string;
    storage_conditions?: string;
    benefits?: string;
    key_ingredients?: string;
    quantity?: string;
    shorterDescription?: string;
    backgroundColor?: string;

    product?: {
        id: number;
        page?: string;
        product_name?: string;
        name: string;
        description: string;
        price: number;
        imageUrl?: string;
        slug: string;
        shortDescription: string;
        instructions_for_use: string;
        storage_conditions: string;
        benefits: string;
        key_ingredients: string;
        quantity?: string;
        backgroundColor?: string;
    };
}
