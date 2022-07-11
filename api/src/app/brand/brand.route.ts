import express from 'express';
import { body, param } from 'express-validator';
import { create, get, getById } from './brand.controller';

const router = express.Router();

router.get('/',get);

router.get('/:id', param('id').isMongoId(), getById);

router.post('/', body('name').isString(), create);

export { router as brandRouter }