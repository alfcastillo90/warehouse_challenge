import { IProduct } from './../schemas/product.schema';
import { setPriceWithProfit } from './product.service';
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from './product.respository';
import { Request, Response } from "express"
import { validationResult } from 'express-validator';
import Logger from '../../utils/logger';

export const get = async (req: Request, res: Response) => {
    try {
        const products = await getProducts(req.query.name?.toString());
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const getById = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({
                status: 422,
                ...errors
            });
        }


        const { id } = req.params;

        const product = await getProductById(id);

        res.status(200).json(product);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        const body = req.body;

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({
                status: 422,
                ...errors
            });
        }
        
        const priceWithProfice = await setPriceWithProfit(body.price, body.category);
        
        const iProduct: IProduct = {
            ...priceWithProfice,
            ...body
        };

        const product = await createProduct(iProduct);

        res.status(201).json(product);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({
                status: 422,
                ...errors
            });
        }


        const { id } = req.params;
        const data = req.body;

        const priceWithProfit = await setPriceWithProfit(data.price, data.category);


        const iProduct: IProduct = {
            ...priceWithProfit,
            ...data
        };
        Logger.info(iProduct);
        const product = await updateProduct(id, iProduct);

        res.status(200).json(product);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const remove = async(req: Request, res: Response) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({
                status: 422,
                ...errors
            });
        }


        const { id } = req.params;

        const product = await deleteProduct(id);

        res.status(200).json(product);
    } catch (error) {
        res.status(400).json(error);
    }
}