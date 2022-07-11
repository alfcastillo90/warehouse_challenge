import { get, create, update, remove, getById } from './product.controller';
import express from 'express';

const router = express.Router();

router.get('/',get);

router.get('/:id', getById);

router.post('/', create);

router.put('/', update);

router.delete('/', remove);

export { router as productRouter }