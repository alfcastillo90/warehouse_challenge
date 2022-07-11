import { IProduct } from './../schemas/product.schema';
import { getCategoryById } from '../category/category.repository';
import Logger from '../../utils/logger';

enum categories {
    TV = 'TELEVISORES',
    SHOES = 'ZAPATOS',
    LAPTOPS = 'LAPTOPS'
}

export interface PriceAndProfit {
    price: number;
    priceWithProfit: number;
    profit: number;
}

export const setPriceWithProfit = async(price: number, categoryId: string): Promise<PriceAndProfit> => {
    const category = await getCategoryById(categoryId);
    Logger.info(category);
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