import { Category } from "./Category";

export interface Product{
    id: number;
    name: string;
    price: number;
    categoryId: number;
}

export interface ProductResponse{
    useBy: number;
    items: Product[];
}