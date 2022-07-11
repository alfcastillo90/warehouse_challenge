import mongoose from "mongoose";

export interface IBrand {
  name: string;
}

export interface BrandDocument extends mongoose.Document {
  name: string;
  products: any[];
  createdAt: string;
  updatedAt: string;
}

interface brandModelInterface extends mongoose.Model<BrandDocument> {
  build(attr: IBrand): BrandDocument;
}

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  },
  {
    timestamps: true,
  }
);

brandSchema.statics.build = (attr: IBrand) => {
  return new Brand(attr);
};

const Brand = mongoose.model<BrandDocument, brandModelInterface>(
  "Brand",
  brandSchema
);

export { Brand };
