import { IProduct, Product, ProductDocument } from "../schemas/product.schema";

export const createProduct = async (data: IProduct): Promise<ProductDocument>  => {
    const product = await Product.create(data);

    product.save()

    return product;
}

export const getProducts = async(name: string | undefined): Promise<ProductDocument[]> => {
    const filter = name != undefined ? { name: { $regex: name } } : {};
    return await Product.find(filter);
}


export const getProductById = async(productId: string): Promise<ProductDocument | null> => {
    return await Product.findById(productId);
}

export const updateProduct = async(productId: string, data: IProduct): Promise<ProductDocument | null> => {
    return await Product.findByIdAndUpdate(productId, data)
}

export const deleteProduct = async(productId: string): Promise<ProductDocument | null> => {
    return await Product.findByIdAndDelete(productId);
}