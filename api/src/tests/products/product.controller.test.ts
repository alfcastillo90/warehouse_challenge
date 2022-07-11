import { ProductDocument } from "./../../app/schemas/product.schema";
import { get, getById } from "./../../app/product/product.controller";
import { Fakexpress } from "../../utils/fake-express";
import * as productRepository from "../../app/product/product.respository";
import { Response } from "express";

describe("ProductController", () => {
  test("getProducts", async () => {
    const products = [
      {
        _id: "62cc40860cafa38852b70799",
        name: "Notebook Ideapad 1",
        sku: "15492920",
        price: 147990,
        attributes: [
          {
            key: "Procesador",
            value: "AMD",
          },
          {
            key: "RAM",
            value: "4GB",
          },
        ],
        currency: "CLP",
        brand: "62cc320521f0a21d9e5bda5f",
        category: "62cb9e187835253684f81fb9",
        createdAt: "2022-07-11T15:23:50.381Z",
        updatedAt: "2022-07-11T15:23:50.381Z",
      },
      {
        _id: "62cc41220cafa38852b7079d",
        name: "Notebook Probook 640 G2",
        sku: "15849414",
        price: 399900,
        attributes: [
          {
            key: "Procesador",
            value: "Intel",
          },
          {
            key: "RAM",
            value: "16GB",
          },
        ],
        currency: "CLP",
        brand: "62cc326721f0a21d9e5bda65",
        category: "62cb9e187835253684f81fb9",
        createdAt: "2022-07-11T15:26:26.203Z",
        updatedAt: "2022-07-11T15:26:26.203Z",
      },
    ];

    const reqRes = new Fakexpress({});

    const spy = await jest
      .spyOn(productRepository, "getProducts")
      .mockResolvedValueOnce(products as ProductDocument[]);

    await get(reqRes.req, reqRes.res as Response);
    
    expect(reqRes.responseData).toEqual(products);
    expect(spy).toHaveBeenCalled();
    
    spy.mockRestore();
  });

  test("getProductById", async () => {
    const product = {
      _id: "62cc40860cafa38852b70799",
      name: "Notebook Ideapad 1",
      sku: "15492920",
      price: 147990,
      attributes: [
        {
          key: "Procesador",
          value: "AMD",
        },
        {
          key: "RAM",
          value: "4GB",
        },
      ],
      currency: "CLP",
      brand: "62cc320521f0a21d9e5bda5f",
      category: "62cb9e187835253684f81fb9",
      createdAt: "2022-07-11T15:23:50.381Z",
      updatedAt: "2022-07-11T15:23:50.381Z",
    };

    const reqRes = new Fakexpress({
      params: {
        id: "62cc40860cafa38852b70799",
      },
    });

    const spy = await jest
      .spyOn(productRepository, "getProductById")
      .mockResolvedValueOnce(product as ProductDocument);
    await getById(reqRes.req, reqRes.res as Response);
    expect(reqRes.responseData).toEqual(product);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});