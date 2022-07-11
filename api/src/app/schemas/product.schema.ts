import mongoose from "mongoose";

export interface IProduct {
  name: string;
  sku: string;
  price: number;
  brand: string;
  category: string;
}

export interface ProductDocument extends mongoose.Document {
  name: string;
  sku: string;
  price: number;
  brand: string;
  category: string;
}

interface productModelInterface extends mongoose.Model<ProductDocument> {
  build(attr: IProduct): ProductDocument;
}

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sku: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

productSchema.statics.build = (attr: IProduct) => {
  return new Product(attr);
};

const Product = mongoose.model<ProductDocument, productModelInterface>(
  "Product",
  productSchema
);

export { Product };
