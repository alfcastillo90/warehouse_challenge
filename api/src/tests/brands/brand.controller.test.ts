import { Fakexpress } from "../../utils/fake-express";
import * as brandRepository from '../../app/brand/brand.repository';
import { Response } from "express";
import { get, getById } from "../../app/brand/brand.controller";

describe("BrandController", () => {
  test("getBrands", async () => {
    const brands = [
        {
            _id: "62cc325e21f0a21d9e5bda62",
            name: "IBM",
            products: [],
            createdAt: "2022-07-11T14:23:26.287Z",
            updatedAt: "2022-07-11T14:23:26.287Z",
        },
        {
            _id: "62cc326721f0a21d9e5bda65",
            name: "HP",
            products: [],
            createdAt: "2022-07-11T14:23:35.291Z",
            updatedAt: "2022-07-11T14:23:35.291Z",
        }
    ];

    const reqRes = new Fakexpress({});

    const spy = await jest
      .spyOn(brandRepository, "getBrands")
      .mockResolvedValueOnce(brands as any[]);
    await get(reqRes.req, reqRes.res as Response);
    expect(reqRes.responseData).toEqual(brands);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  test("getBrandById", async () => {
    const brand = {
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

    const spy = await jest
      .spyOn(brandRepository, "getBrandById")
      .mockResolvedValueOnce(brand as any);
    await getById(reqRes.req, reqRes.res as Response);
    expect(reqRes.responseData).toEqual(brand);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});