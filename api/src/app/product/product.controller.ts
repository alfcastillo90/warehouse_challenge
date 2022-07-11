import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from './product.respository';
import { Request, Response } from "express"
import { validationResult } from 'express-validator';

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


        const { productId } = req.params;

        const product = await getProductById(productId);

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

        const product = await createProduct(body);

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


        const { productId } = req.params;
        const data = req.body;

        const product = await updateProduct(productId, data);

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


        const { productId } = req.params;

        const product = await deleteProduct(productId);

        res.status(200).json(product);
    } catch (error) {
        res.status(400).json(error);
    }
}