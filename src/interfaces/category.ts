export interface Category{
    id: number;
    name: 'meat' | 'veg' | 'fruit' | 'dairy' | 'juice' | 'baked' | 'snacks',
    color: string;
    uri: HTMLImageElement,
}