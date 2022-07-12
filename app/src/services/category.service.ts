import http from "@/http-common";

/* eslint-disable */
class CategoryService {
  getAll(): Promise<any> {
    return http.get("/categories");
  }
}

export default new CategoryService();
