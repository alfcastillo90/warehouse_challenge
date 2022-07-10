import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    return res.send('get products');
})

router.get('/:id', (req, res) => {
    return res.send('get product by id');
})

router.post('/', (req, res) => {
    return res.send('create products');
})

router.put('/', (req, res) => {
    return res.send('update products');
})

router.delete('/', (req, res) => {
    return res.send('delete products');
});

export { router as productRouter }