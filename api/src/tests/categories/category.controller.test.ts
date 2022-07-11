import { Fakexpress } from "../../utils/fake-express";
import * as categoryRepository from '../../app/category/category.repository';
import { Response } from "express";
import { get, getById } from "../../app/category/category.controller";

describe("CategoryController", () => {
  test("getCategories", async () => {
    const categories = [
        {
            _id: "62cb9de47835253684f81fb6",
            name: "Televisores",
            products: [],
            createdAt: "2022-07-11T03:49:56.775Z",
            updatedAt: "2022-07-11T03:49:56.775Z",
        },
    ];

    const reqRes = new Fakexpress({});

    const spy = await jest.spyOn(categoryRepository, "getCategories").mockResolvedValueOnce(categories as any);
    await get(reqRes.req, reqRes.res as Response);
    expect(reqRes.responseData).toEqual(categories);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  test("getCategoryById", async () => {
    const category = {
      _id: "62cc325e21f0a21d9e5bda62",
      name: "IBM",
      products: [],
      createdAt: "2022-07-11T14:23:26.287Z",
      updatedAt: "2022-07-11T14:23:26.287Z",
  };

    const reqRes = new Fakexpress({
      params: {
        id: "62cc325e21f0a21d9e5bda62",
      },
    });

    const spy = await jest.spyOn(categoryRepository, "getCategoryById").mockResolvedValueOnce(category as any);
    await getById(reqRes.req, reqRes.res as Response);
    expect(reqRes.responseData).toEqual(category);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});