import Logger from "../../utils/logger";
import { IProduct, Product, ProductDocument } from "../schemas/product.schema";

export const createProduct = async (data: IProduct): Promise<ProductDocument>  => {
    const product = await Product.create(data);

    product.save()

    return product;
}

export const getProducts = async(): Promise<ProductDocument[]> => {
    return await Product.find({});
}


export const getProductById = async(productId: string): Promise<ProductDocument | null> => {
    return await Product.findById(productId);
}

export const updateProduct = async(productId: string, data: IProduct): Promise<ProductDocument | null> => {
    return await Product.findByIdAndUpdate(productId, data, { new: true });
}

export const deleteProduct = async(productId: string): Promise<ProductDocument | null> => {
    return await Product.findByIdAndDelete(productId);
}