import { getProductById as getById, getProducts as getAll } from './product.respository';
import { getCategoryById } from '../category/category.repository';
import Logger from '../../utils/logger';

enum categories {
    TV = 'TV',
    SHOES = 'SHOES',
    LAPTOPS = 'COMPUTERS'
}

export interface PriceAndProfit {
    price: number;
    priceWithProfit: number;
    profit: number;
}

export interface ProductResponse {
    _id: string;
    name: string;
    sku: string;
    price: number;
    profit: number;
    priceWithProfit: number;
    currency: string;
    attributes: Array<{key: string, value: string}>;
    brand: string;
    brandId: string;
    category: string;
    categoryId: string;
    createdAt: string;
    updatedAt: string;
}

export const getProductById = async(productId: string) => {
    const product = await getById(productId);

    const response: ProductResponse | null =  product == null ? null : {
            _id: product._id,
            name: product.name,
            attributes: product.attributes,
            sku: product.sku,
            price: product.price,
            profit: product.profit,
            priceWithProfit: product.priceWithProfit,
            currency: product.currency,
            category: product.category.name,
            categoryId: product.category._id,
            brand: product.brand.name,
            brandId: product.brand._id,
            createdAt: product.createdAt,
            updatedAt: product.updatedAt
        };

    return response;
};

export const getProducts = async(name: string | undefined) => {
    const products = await getAll(name);
    const response: ProductResponse[] = products.map(product => {
        return {
            _id: product._id,
            name: product.name,
            attributes: product.attributes,
            sku: product.sku,
            price: product.price,
            profit: product.profit,
            priceWithProfit: product.priceWithProfit,
            currency: product.currency,
            category: product.category.name,
            categoryId: product.category._id,
            brand: product.brand.name,
            brandId: product.brand.id,
            createdAt: product.createdAt,
            updatedAt: product.updatedAt
        }
    });

    return response;
}

export const setPriceWithProfit = async(price: number, categoryId: string): Promise<PriceAndProfit> => {
    console.log(`category id ${categoryId}`);

    const category = await getCategoryById(categoryId);
    console.log(category)
    let priceWithProfit = 0;
    let profit = 0;

    switch(category?.name.toUpperCase()) {
        case categories.TV:
            profit = price*0.35;
            break;
        case categories.SHOES:
            profit = price*0.4;
            break;
        case categories.LAPTOPS:
            profit = price*0.3;
            break;
        default: 
            profit = 0;
            break;
    }

    priceWithProfit = price + profit;

    const result: PriceAndProfit = {
        price,
        profit,
        priceWithProfit
    };

    return result;
}