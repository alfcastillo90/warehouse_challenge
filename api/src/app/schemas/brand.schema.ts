import mongoose from "mongoose";

export interface IBrand {
  name: string;
}

export interface BrandDocument extends mongoose.Document {
  name: string;
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

const Brand = mongoose.model("Brand", brandSchema);

brandSchema.statics.build = (attr: IBrand) => {
  return new Product(attr);
};

const Product = mongoose.model<BrandDocument, brandModelInterface>(
  "Product",
  brandSchema
);

export { Brand };
