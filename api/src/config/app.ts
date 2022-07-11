import express from 'express';
import cors from 'cors';
import "reflect-metadata";
import Logger from '../utils/logger';
import { productRouter } from '../app/product/product.route';
import listEndpoints from 'express-list-endpoints';
import mongoose from 'mongoose';
import environment from './environment';
import { categoryRouter } from '../app/category/category.route';
import { brandRouter } from '../app/brand/brand.route';

class App {
    private readonly app: express.Application;
    private readonly port: string;

    private apiPaths = {
        brands: 'api/brands',
        categories: '/api/categories',
        products: '/api/products'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

        mongoose.connect(`${environment.mongoUrl}`).then(() => {
            Logger.info('database connected');
            this.middlewares();
            this.routes();
        }).catch(err => {
            Logger.error(err)
        }); 
    }

    listen() {
        this.app.listen(this.port, () => {
            Logger.info(`Server running at port ${this.port}`)
        });
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.apiPaths.brands, brandRouter);
        this.app.use(this.apiPaths.categories, categoryRouter);
        this.app.use(this.apiPaths.products, productRouter);
        Logger.info(listEndpoints(this.app as any));
    }
}
export default App; 