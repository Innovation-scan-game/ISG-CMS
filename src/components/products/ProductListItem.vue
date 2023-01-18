<template>
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 p-2">
    <div class="card product-card h-100">
      <div class="card-body">
        <h2>{{product.cardNumber}}</h2>
        <div class="float-start">
          <p>{{ product.cardName }}</p>
          <p>
            <small>{{ product.cardBody }}</small>
          </p>
        </div>
        <!-- <span class="price float-end">{{ product.type }}</span> -->
      </div>
      <div class="card-footer">
        <button class="btn btn-warning" @click="editProduct(product.id)">Edit</button>&nbsp;&nbsp;
        <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../../axios-auth'

export default {
  name: "ProductListItem",
  props: {
    product: Object,
  },
  methods: {
    deleteProduct(id) {
      axios
        .delete("https://cardisc.azurewebsites.net/api/cards/" + id)
        .then((result) => {
          console.log(result);
          this.$emit('update')
        })
        .catch((error) => console.log(error));
    },
    editProduct(id) {
      this.$router.push('/editproduct/' + id);
    }
  },
};
</script>

<style>
</style>