import http from "@/http-common";

/* eslint-disable */
class ProductService {
  getAll(): Promise<any> {
    return http.get("/products");
  }

  get(id: any): Promise<any> {
    return http.get(`/products/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/Product", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/Product/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/Product/${id}`);
  }

  deleteAll(): Promise<any> {
    return http.delete(`/Product`);
  }

  findByNane(name: string): Promise<any> {
    return http.get(`/Product?name=${name}`);
  }
}

export default new ProductService();
