import { getBrands, getBrandById, createBrand } from './brand.repository';
import Logger from '../../utils/logger';
import { Request, Response } from "express"
import { validationResult } from 'express-validator';

export const get = async (req: Request, res: Response) => {
    try {
        const brands = await getBrands();
        res.status(200).json(brands);
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


        const { brandId } = req.params;

        const brand = await getBrandById(brandId);

        res.status(200).json(brand);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        console.log('init create category method')
        const body = req.body;

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({
                status: 422,
                ...errors
            });
        }

        const brand = await createBrand(body);

        res.status(201).json(brand);
    } catch (error) {
        return res.status(500).json(error);
    }
}
