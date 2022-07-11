import { getCategories, getCategoryById, createCategory } from './category.repository';
import { Request, Response } from "express"
import { validationResult } from 'express-validator';

export const get = async (req: Request, res: Response) => {
    try {
        const categories = await getCategories();
        res.status(200).json(categories);
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


        const { categoryId } = req.params;

        const category = await getCategoryById(categoryId);

        res.status(200).json(category);
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

        const category = await createCategory(body);

        res.status(201).json(category);
    } catch (error) {
        return res.status(500).json(error);
    }
}
