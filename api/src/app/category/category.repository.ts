import { ICategory, CategoryDocument, Category } from "../schemas/category.schema";

export const createCategory = async (data: ICategory): Promise<CategoryDocument>  => {
    const category = await Category.create(data);

    category.save()

    return category;
}

export const getCategorys = async(): Promise<CategoryDocument[]> => {
    return await Category.find({});
}


export const getCategoryById = async(categoryId: string): Promise<CategoryDocument | null> => {
    return await Category.findById(categoryId);
}