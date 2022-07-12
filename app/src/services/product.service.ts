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
    return http.post(`/products`, data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/products/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/products/${id}`);
  }

  findByNane(name: string): Promise<any> {
    return http.get(`/products?name=${name}`);
  }
}

export default new ProductService();
