<template>
    <div class="submit-form">
        <div v-if="!submitted">
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
                <input class="form-control" id="price" required v-model="product.price" name="price" type="number" />
            </div>

            <div class="form-group">
                <label for="currency">Currency</label>
                <input class="form-control" id="currency" required v-model="product.currency" name="currency" />
            </div>

            <div class="form-group">
                <label for="brand">Brand</label>
                <input class="form-control" id="brand" required v-model="product.brand" name="brand" />
            </div>

            <div class="form-group">
                <label for="category">Category</label>
                <input class="form-control" id="category" required v-model="product.category" name="category" />
            </div>

            <button @click="saveTutorial" class="btn btn-success">Submit</button>
        </div>

        <div v-else>
            <h4>You submitted successfully!</h4>
            <button class="btn btn-success" @click="newTutorial">Add</button>
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
