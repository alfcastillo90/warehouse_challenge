import http from "@/http-common";

/* eslint-disable */
class BrandService {
  getAll(): Promise<any> {
    return http.get("/brands");
  }
}

export default new BrandService();
