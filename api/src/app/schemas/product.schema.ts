import { BrandDocument } from './brand.schema';
import { CategoryDocument } from './category.schema';
import mongoose from "mongoose";

export interface IProduct {
  name: string;
  sku: string;
  price: number;
  profit: number;
  priceWithProfit: number;
  currency: string,
  attributes: Array<{key: string, value: string}>,
  brand: string;
  category: string;
}

export interface ProductDocument extends mongoose.Document {
  name: string;
  sku: string;
  price: number;
  profit: number;
  priceWithProfit: number;
  currency: string;
  attributes: Array<{key: string, value: string}>;
  brand: BrandDocument;
  category: CategoryDocument;
  createdAt: string;
  updatedAt: string;
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
    profit: {
      type: Number,
      required: true,
    },
    priceWithProfit: {
      type: Number,
      required: true,
    },
    attributes: {
      type: Array,
      required: true
    },
    currency: {
      type: String,
      required: true
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
