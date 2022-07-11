import { get, create, update, remove, getById } from './product.controller';
import express from 'express';
import { createProductValidator, updateProductValidator } from './product.validator';
import { param } from 'express-validator';

const router = express.Router();

router.get('/',get);

router.get('/:id', param('id').isMongoId(), getById);

router.post('/', createProductValidator, create);

router.put('/:id', updateProductValidator, update);

router.delete('/:id', param('id').isMongoId(), remove);

export { router as productRouter }