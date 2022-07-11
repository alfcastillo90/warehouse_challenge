import { Response } from 'express';

export class Fakexpress {

  constructor(req: any) {
    this.req = req;
  }

  res : Partial<Response> = {
    status: jest.fn().mockImplementation((code) => {
      this.res.status = code;
      return this.res;
    }),
    json: jest.fn().mockImplementation((param) => {
      this.responseData = param;
      return this.res;
    }),
    cookie: jest.fn(),
    clearCookie: jest.fn()
  }

  req: any;
  responseData: any;
}