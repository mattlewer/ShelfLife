export interface Product{
    id: number;
    name: string;
    price: number;
    categoryId: number;
    useBy: number;
}

export interface ProductResponse{
    useBy: number;
    items: Product[];
}