<template>
    <div v-if="currentProduct._id" class="edit-form">
        <h4>Product</h4>
        <form>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" required v-model="currentProduct.name" name="name" />
            </div>

            <div class="form-group">
                <label for="sku">SKU</label>
                <input class="form-control" id="sku" required v-model="currentProduct.sku" name="sku" />
            </div>

            <div class="form-group">
                <label for="price">Price</label>
                <input class="form-control" id="price" required v-model="currentProduct.price" name="price" type="number" />
            </div>

            <div class="form-group">
                <label for="currency">Currency</label>
                <input class="form-control" id="currency" required v-model="currentProduct.currency" name="currency" />
            </div>

            <div>
                <label for="brand">Brand</label>
                <select class="form-control" v-model="currentProduct.brandId" id="brand" name="brand">
                    <option :key="item.id" :value="item.id" v-for="(item) in optionsForBrands">{{ item.name }}
                    </option>
                </select>
            </div>

            <div>
                <label for="category">Category</label>
                <select class="form-control" v-model="currentProduct.categoryId" id="category" name="category">
                    <option :key="item.id" :value="item.id" v-for="(item) in optionsForCategories">{{ item.name }}
                    </option>
                </select>
            </div>
        </form>
        <button class="badge badge-primary mr-2" @click="updatePublished(true)">
            Publish
        </button>

        <button class="badge badge-danger mr-2" @click="deleteProduct">
            Delete
        </button>

        <button type="submit" class="badge badge-success" @click="updateProduct">
            Update
        </button>
        <p>{{ message }}</p>
    </div>

    <div v-else>
        <br />
        <p>Please click on a Product...</p>
    </div>
</template>

<script lang="ts" src="./product-details"></script>

<style>
.edit-form {
    max-width: 300px;
    margin: auto;
}
</style>
