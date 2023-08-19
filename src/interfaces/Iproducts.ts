export interface IProduct {
    id: number;
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

    product?: {
        id: number;
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
    };
}
