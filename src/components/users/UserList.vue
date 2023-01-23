<template>
  <section>
    <div class="container">
      <h2 class="mt-3 mt-lg-5">User</h2>
      <div class="form-group">
        <input type="text" class="form-control" v-model="searchTerm" placeholder="Search for a user...">
      </div>
        <button type="button" class="btn btn-primary mt-3" @click="this.$router.push('/api/cms/createuser');">
            Add Users
          </button>
      <div class="row mt-3">
        <user-list-item
          v-for="user in filteredUsers"
          :key="user.id"
          :user="user"
          @update="update"
        />
      </div>
    </div>
  </section>
</template>
<script>
import axios from "../../axios-auth.js";

import UserListItem from "./UserListItem.vue";

export default {
  name: "UserList",
  components: {
    UserListItem,
  },
  data() {
    return {
      users: [],
      searchTerm: '',
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user => {
        return user.username.toLowerCase().includes(this.searchTerm.toLowerCase())
      })
    }
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      axios
        .get("/users")
        .then((result) => {
          console.log(result);
          this.users = result.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
<style>
</style>