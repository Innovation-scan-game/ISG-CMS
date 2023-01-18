<template>
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 p-2">
      <div class="card user-card h-100">
        <div class="card-body">
          <h2>{{users.username}}</h2>
          <div class="float-start">
            <p>{{ users.email }}</p>
            <p>{{ users.role }}</p>
            <p> {{ users.picture }}</p>
          </div>
          <!-- <span class="price float-end">{{ product.type }}</span> -->
        </div>
        <div class="card-footer">
          <button class="btn btn-warning" @click="editUser(users.id)">Edit</button>&nbsp;&nbsp;
          <button class="btn btn-danger" @click="deleteUser(users.id)">Delete</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from '../../axios-auth'
  
  export default {
    name: "UserListItem",
    props: {
      users: Object,
    },
    methods: {
      deleteUser(id) {
        axios
          .delete("https://cardisc.azurewebsites.net/api/users/" + id)
          .then((result) => {
            console.log(result);
            this.$emit('update')
          })
          .catch((error) => console.log(error));
      },
      editUser(id) {
        this.$router.push('/edituser/' + id);
      }
    },
  };
  </script>
  
  <style>
  </style>