import { IBrand, BrandDocument, Brand } from "../schemas/brand.schema";

export const createBrand = async (data: IBrand): Promise<BrandDocument>  => {
    const brand = await Brand.create(data);

    brand.save()

    return brand;
}

export const getBrands = async(): Promise<BrandDocument[]> => {
    return await Brand.find({});
}


export const getBrandById = async(brandId: string): Promise<BrandDocument | null> => {
    return await Brand.findById(brandId);
}