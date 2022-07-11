import mongoose from "mongoose";

export interface ICategory {
  name: string;
}

export interface CategoryDocument extends mongoose.Document {
  name: string;
  products: any[];
  createdAt: string;
  updatedAt: string;
}

interface productModelInterface extends mongoose.Model<CategoryDocument> {
  build(attr: ICategory): CategoryDocument;
}

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    products: [
      { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Product",
      }
    ],
  },
  {
    timestamps: true,
  }
);

categorySchema.statics.build = (attr: ICategory) => {
  return new Category(attr);
};

const Category = mongoose.model<CategoryDocument, productModelInterface>(
  "Category",
  categorySchema
);

export { Category };
