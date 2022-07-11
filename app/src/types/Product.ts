export default interface Product {
    _id?: string;
    name: string;
    sku: string;
    price: number;
    profit: number;
    priceWithProfit: number;
    currency: string;
    attributes: Array<{key: string, value: string}>;
    brand: string;
    category: string;
    createdAt?: string;
    updatedAt?: string;
}