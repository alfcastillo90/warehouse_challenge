import { defineComponent } from "vue";
import ResponseData from "@/types/ResponseData";
import productService from "@/services/product.service";
import Product from "@/types/Product";
import brandService from "@/services/brand.service";
import categoryService from "@/services/category.service";

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
      categorySelected: '',
      optionsForBrands: Array<{id: string, name: string}>(),
      optionsForCategories: Array<{id: string, name: string}>()
    };
  },
  methods: {
    onChange(event: any ) {
      this.categorySelected = event.target.options[event.target.selectedIndex].text
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
    saveProduct() {
      const attributes = [];

      if (this.categorySelected == 'TV') {
        const tvType = (<HTMLInputElement>document.getElementById('tv-type')).value;
        const tvSize = (<HTMLInputElement>document.getElementById('tv-size')).value;

        attributes.push(
          {
            key: 'type',
            value: tvType
          },
          {
            key: 'size',
            value: tvSize
          }
        );
      } else if(this.categorySelected == 'Computers') {
        const processor = (<HTMLInputElement>document.getElementById('computer-processor')).value;
        const ram = (<HTMLInputElement>document.getElementById('computer-ram')).value;

        attributes.push(
          {
            key: 'processor',
            value: processor
          },
          {
            key: 'ram',
            value: ram
          }
        );
      } else if (this.categorySelected == 'Shoes') {
        const material = (<HTMLInputElement>document.getElementById('shoe-material')).value;
        const size = (<HTMLInputElement>document.getElementById('shoe-size')).value;

        attributes.push(
          {
            key: 'material',
            value: material
          },
          {
            key: 'size',
            value: size
          }
        );
      }

      const data = {
        name: this.product.name,
        sku: this.product.sku,
        price: this.product.price,
        currency: this.product.currency,
        brand: this.product.brandId,
        category: this.product.categoryId,
        attributes
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

    newProduct() {
      this.submitted = false;
      this.product = {} as Partial<Product>;
    },
  },

  mounted() {
    this.getBrands();
    this.getCategories();
  },
});
