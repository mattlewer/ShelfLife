export type CategoryName = 'meat' | 'veg' | 'fruit' | 'dairy' | 'juice' | 'baked' | 'snacks';

export interface Category{
    id: number;
    name: CategoryName,
    color: string;
    uri: HTMLImageElement,
}