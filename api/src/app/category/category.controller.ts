import Logger from '../../utils/logger';
import { getCategories, getCategoryById, createCategory } from './category.repository';
import { Request, Response } from "express"
import { validationResult } from 'express-validator';

export const get = async (req: Request, res: Response) => {
    try {
        const products = await getCategories();
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

        const product = await getCategoryById(productId);

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

        const product = await createCategory(body);

        res.status(201).json(product);
    } catch (error) {
        return res.status(500).json(error);
    }
}
