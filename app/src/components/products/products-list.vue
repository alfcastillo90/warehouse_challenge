<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by name" v-model="name" />
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
    </div>
    <div class="col-md-6">
      <div v-if="currentProduct._id">
        <h4>Product</h4>
        <ul class="list-group">
          <li class="list-group-item">
            <label><strong>Name:</strong></label> {{ currentProduct.name }}
          </li>

          <li class="list-group-item">
            <label><strong>SKU:</strong></label>
            {{ currentProduct.sku }}
          </li>

          <li class="list-group-item">
            <label><strong>Price:</strong></label>
            {{ currentProduct.price }}
          </li>

          <li class="list-group-item">
            <label><strong>Profit:</strong></label>
            {{ currentProduct.profit }}
          </li>

          <li class="list-group-item">
            <label><strong>Price with profit:</strong></label>
            {{ currentProduct.priceWithProfit }}
          </li>

          <li class="list-group-item">
            <label><strong>Brand:</strong></label>
            {{ currentProduct.brand }}
          </li>

          <li class="list-group-item">
            <label><strong>Category:</strong></label>
            {{ currentProduct.category }}
          </li>

          <li class="list-group-item">
            <label><strong>Attributes:</strong></label>
            <ul class="list-group">
              <li class="list-group-item" v-for="(attribute, index) in currentProduct.attributes" :key="index">
                <b>{{ attribute.key }}</b>: {{ attribute.value }}
              </li>
            </ul>
          </li>
        </ul>
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
