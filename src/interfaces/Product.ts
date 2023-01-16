export interface Product{
    id: number;
    name: string;
    price: number;
}

export interface ProductResponse{
    useBy: number;
    items: Product[];
}