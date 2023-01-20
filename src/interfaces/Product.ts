export interface Product{
    id: number;
    name: string;
    price: number;
    category: 'meat' | 'veg' | 'fruit' | 'dairy' | 'juice' | 'baked' | 'snacks';
}

export interface ProductResponse{
    useBy: number;
    items: Product[];
}