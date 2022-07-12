<template>
    <div class="container-fluid">
        <div v-if="!submitted" class="row">
            <div class="col">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" required v-model="product.name" name="name" />
                </div>

                <div class="form-group">
                    <label for="sku">SKU</label>
                    <input class="form-control" id="sku" required v-model="product.sku" name="sku" />
                </div>

                <div class="form-group">
                    <label for="price">Price</label>
                    <input class="form-control" id="price" required v-model="product.price" name="price"
                        type="number" />
                </div>

                <div>
                    <label for="currency">Currency</label>
                    <select class="form-control" v-model="product.currency" id="currency" name="currency" required>
                        <option value="" selected disabled hidden>Choose here</option>
                        <option value="CLP">Chilean pesos</option>
                        <option value="MXN">Mexican pesos</option>
                        <option value="USD">US Dollar</option>
                    </select>
                </div>

                <div>
                    <label for="brand">Brand</label>
                    <select class="form-control" v-model="product.brandId" id="brand" name="brand">
                        <option :key="item.id" :value="item.id" v-for="(item) in optionsForBrands">{{ item.name }}
                        </option>
                    </select>
                </div>

                <div>
                    <label for="category">Category</label>
                    <select class="form-control" v-model="product.categoryId" id="category" name="category"
                        @change="onChange($event)">
                        <option :key="item.id" :value="item.id" v-for="(item) in optionsForCategories">{{ item.name }}
                        </option>
                    </select>
                </div>

                <button @click="saveProduct" class="btn btn-success">Submit</button>
            </div>
            <div class="col">
                <div v-if="categorySelected == 'TV'">
                    <div>
                        <label for="brand">Type</label>
                        <select class="form-control" id="tv-type" name="tv-type" required>
                            <option value="" selected disabled hidden>Choose here</option>
                            <option value="LED">LED</option>
                            <option value="LCD">LCD</option>
                            <option value="OLED">OLED</option>
                        </select>
                    </div>

                    <div>
                        <label for="category">Size</label>
                        <input class="form-control" id="tv-size" required name="tv-size" type="number" />
                    </div>
                </div>
                <div v-if="categorySelected == 'Computers'">
                    <div>
                        <label for="brand">Processor</label>
                        <select class="form-control" id="computer-processor" name="computer-processor" required>
                            <option value="" selected disabled hidden>Choose here</option>
                            <option value="AMD">AMD</option>
                            <option value="Intel">Intel</option>
                        </select>
                    </div>

                    <div>
                        <label for="category">RAM</label>
                        <input class="form-control" id="computer-ram" required name="computer-ram" type="number" />
                    </div>
                </div>
                <div v-if="categorySelected == 'Shoes'">
                    <div>
                        <label for="brand">Material</label>
                        <select class="form-control" id="shoe-material" name="shoe-material" required>
                            <option value="" selected disabled hidden>Choose here</option>
                            <option value="synthetic">Synthetic</option>
                            <option value="leather">Leather</option>
                        </select>
                    </div>

                    <div>
                        <label for="category">Size</label>
                        <input class="form-control" id="shoe-size" required name="shoe-size" type="number" />
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="container-md">
            <h4>You submitted successfully!</h4>
            <button class="btn btn-success" @click="newProduct">Add</button>
        </div>
    </div>
</template>

<script lang="ts" src="./create-product"></script>

<style>
.submit-form {
    max-width: 300px;
    margin: auto;
}
</style>
