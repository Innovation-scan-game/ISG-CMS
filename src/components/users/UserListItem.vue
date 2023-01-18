User list item
<template>
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 p-2">
    <div class="card product-card h-100">
      <div class="card-body">
        <h2>{{user.username}}</h2>
        <div class="float-start">
          <p>{{ user.email }}</p>
          <p>
            <small>{{ user.role }}</small>
          </p>
          <img :src="user.picture">
        </div>
        <!-- <span class="price float-end">{{ user.type }}</span> -->
      </div>
      <div class="card-footer">
        <button class="btn btn-warning" @click="editProduct(user.id)">Edit</button>&nbsp;&nbsp;
        <button class="btn btn-danger" @click="deleteProduct(user.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../../axios-auth'

export default {
  name: "UserListItem",
  props: {
    user: Object,
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