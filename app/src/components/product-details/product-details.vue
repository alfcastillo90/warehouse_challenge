<template>
  <div class="container-fluid">
    <h4>Product details</h4>
    <div v-if="currentProduct._id" class="row">
      <div class="col">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            required
            v-model="currentProduct.name"
            name="name"
          />
        </div>

        <div class="form-group">
          <label for="sku">SKU</label>
          <input
            class="form-control"
            id="sku"
            required
            v-model="currentProduct.sku"
            name="sku"
          />
        </div>

        <div class="form-group">
          <label for="price">Price</label>
          <input
            class="form-control"
            id="price"
            required
            v-model="currentProduct.price"
            name="price"
            type="number"
          />
        </div>

        <div>
          <label for="currency">Currency</label>
          <select
            class="form-control"
            v-model="currentProduct.currency"
            id="currency"
            name="currency"
            required
          >
            <option value="" selected disabled hidden>Choose here</option>
            <option value="CLP">Chilean pesos</option>
            <option value="MXN">Mexican pesos</option>
            <option value="USD">US Dollar</option>
          </select>
        </div>
      </div>
      <div class="col">
        <div>
          <label for="brand">Brand</label>
          <select
            class="form-control"
            v-model="currentProduct.brandId"
            id="brand"
            name="brand"
            disabled
          >
            <option
              :key="item.id"
              :value="item.id"
              v-for="item in optionsForBrands"
            >
              {{ item.name }}
            </option>
          </select>
        </div>

        <div>
          <label for="category">Category</label>
          <select
            class="form-control"
            v-model="currentProduct.categoryId"
            id="category"
            name="category"
            disabled
          >
            <option
              :key="item.id"
              :value="item.id"
              v-for="item in optionsForCategories"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
        <div v-for="attribute in currentProduct.attributes" :key="attribute.key">
          <span><b>{{ attribute.key }}: </b>{{attribute.value}}</span>
        </div>
        <button type="submit" class="btn btn-success" @click="updateProduct">
          Update
        </button>
        <button class="btn btn-danger" @click="deleteProduct">Delete</button>
      </div>
      <p>{{ message }}</p>
    </div>

    <div v-else>
      <br />
      <p>Please click on a Product...</p>
    </div>
  </div>
</template>

<script lang="ts" src="./product-details"></script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
