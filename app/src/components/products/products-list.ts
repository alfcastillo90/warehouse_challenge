import { defineComponent } from "vue";
import ProductService from "@/services/product.service";
import Product from "@/types/Product";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "products-list",
  data() {
    return {
      products: [] as Product[],
      currentProduct: {} as Product,
      currentIndex: -1,
      name: "",
    };
  },
  methods: {
    retrieveProducts() {
      ProductService.getAll()
        .then((response: ResponseData) => {
          this.products = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveProducts();
      this.currentProduct = {} as Product;
      this.currentIndex = -1;
    },

    setActiveProduct(product: Product, index = -1) {
      this.currentProduct = product;
      this.currentIndex = index;
    },

    searchTitle() {
      ProductService.findByNane(this.name)
        .then((response: ResponseData) => {
          this.products = response.data;
          this.setActiveProduct({} as Product);
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveProducts();
  },
});