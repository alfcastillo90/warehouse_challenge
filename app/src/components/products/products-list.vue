<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by name" v-model="title" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="searchTitle">
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Products List</h4>
      <ul class="list-group">
        <li class="list-group-item" :class="{ active: index == currentIndex }" v-for="(product, index) in products"
          :key="index" @click="setActiveProduct(product, index)">
          {{ product.name }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllProducts">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentProduct._id">
        <h4>Product</h4>
        <div>
          <label><strong>Name:</strong></label> {{ currentProduct.name }}
        </div>

        <div>
          <label><strong>SKU:</strong></label>
          {{ currentProduct.sku }}
        </div>

        <div>
          <label><strong>Price:</strong></label>
          {{ currentProduct.price }}
        </div>

        <div>
          <label><strong>Profit:</strong></label>
          {{ currentProduct.profit }}
        </div>

        <div>
          <label><strong>Price with profit:</strong></label>
          {{ currentProduct.priceWithProfit }}
        </div>

        <router-link :to="'/products/' + currentProduct._id" class="badge badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Product...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./products-list"></script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
