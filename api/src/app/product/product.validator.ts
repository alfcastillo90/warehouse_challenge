import { checkSchema } from "express-validator";

export const createProductValidator = checkSchema({
  name: {
    in: ["body"],
    isString: true
  },
  sku: {
    in: ["body"],
    isAlphanumeric: true
  },
  price: {
    in: ["body"],
    isNumeric: true,
  },
  attributes: {
    in: ["body"],
    isArray: true,
  },
  brand: {
    in: ["body"],
    isMongoId: true,
  },
  category: {
    in: ["body"],
    isMongoId: true,
  },
});

export const updateProductValidator = checkSchema({
  id: {
    in: ["params"],
    isMongoId: true
  },
  name: {
    in: ["body"],
  },
  sku: {
    in: ["body"],
  },
  price: {
    in: ["body"],
    isNumeric: true,
  },
  attributes: {
    in: ["body"],
    isArray: true,
  },
  brand: {
    in: ["body"],
    isMongoId: true,
  },
  category: {
    in: ["body"],
    isMongoId: true,
  },
});
