import { defineComponent } from "vue";
import ResponseData from "@/types/ResponseData";
import productService from "@/services/product.service";
import Product from "@/types/Product";
export default defineComponent({
  name: "add-product",
  data() {
    return {
      product: {
        _id: "",        
        name: "",
        sku: "",
        price: 0,
        currency: "",
        attributes: [],
        brand: "",
        category: "",
      } as Partial<Product>,
      submitted: false,
    };
  },
  methods: {
    saveTutorial() {
      const data = {
        name: this.product.name,
        sku: this.product.sku,
        price: this.product.price,
        currency: this.product.currency,
        brand: this.product.brand,
        category: this.product.category,
      };

      productService
        .create(data)
        .then((response: ResponseData) => {
          this.product._id = response.data._id;
          this.submitted = true;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    newTutorial() {
      this.submitted = false;
      this.product = {} as Partial<Product>;
    },
  },
});
