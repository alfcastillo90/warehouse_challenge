
import { defineComponent } from "vue";
import ResponseData from "@/types/ResponseData";
import productService from "@/services/product.service";
import Product from "@/types/Product";
import brandService from "@/services/brand.service";
import categoryService from "@/services/category.service";

export default defineComponent({
  name: "product",
  data() {
    return {
      currentProduct: {} as Product,
      message: "",
      optionsForBrands: Array<{id: string, name: string}>(),
      optionsForCategories: Array<{id: string, name: string}>()
    };
  },
  methods: {
    getProduct(id: any) {
      productService.get(id)
        .then((response: ResponseData) => {
          this.currentProduct = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    updateProduct() {
      const data = {
        name: this.currentProduct.name,
        sku: this.currentProduct.sku,
        price: this.currentProduct.price,
        currency: this.currentProduct.currency,
        brand: this.currentProduct.brandId,
        category: this.currentProduct.categoryId,
        attributes: this.currentProduct.attributes
      };

      productService.update(this.currentProduct._id, data)
        .then((response: ResponseData) => {
          alert("The product was updated successfully!");
          this.$router.push({ name: "products" });

        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    deleteProduct() {
      if(window.confirm('Are you sure?')) {
        productService.delete(this.currentProduct._id)
        .then((response: ResponseData) => {
          console.log(response.data);
          this.$router.push({ name: "products" });
        })
        .catch((e: Error) => {
          console.log(e);
        });
      }
    },

    getBrands() {
      brandService.getAll().then((response: ResponseData) => {
        response.data.forEach((item: {_id: string, name: string}) => {
          this.optionsForBrands.push({ id: item._id, name: item.name });
        });
      });
    },

    getCategories() {
      categoryService.getAll().then((response: ResponseData) => {
        response.data.forEach((item: {_id: string, name: string}) => {
          this.optionsForCategories.push({ id: item._id, name: item.name });
        });
      });
    },
  },

  mounted() {
    this.message = "";
    this.getCategories();
    this.getBrands();
    this.getProduct(this.$route.params.id);
    
  },
});