<template>
  <section>
    <div class="container">
      <form ref="form">
        <h2 class="mt-3 mt-lg-5">Edit User</h2>
        <h5 class="mb-4"></h5>

        <div class="input-group mb-3">
          <span class="input-group-text">username</span>
          <input type="text" class="form-control" v-model="user.username" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">User Email</span>
          <textarea
            class="form-control"
            v-model="user.email"
          ></textarea>
        </div>
        
        <div class="input-group mb-3">
          <span class="input-group-text">Role</span>
          <select class="form-select" v-model="user.role" placeholder="Select Role">
            <option :value="'user'">User</option>
            <option :value="'Admin'">Admin</option>
          </select>
        </div>
        

        <div class="input-group mt-4">
          <button type="button" class="btn btn-primary" @click="updateUser">
            Save changes
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="this.$router.push('/users')"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from '../../axios-auth'

export default {
  name: "UpdateUser",
  props: {
    id: String,
  },
  data() {
    return {
      user: {
        Id: this.id,
        username: "",
        email: "",
        role: "",   
           
      },
    };
  },
  created() {
    this.getUserData(this.id);
  },
  methods: {
    async getUserData(id) {
      try {
        const response = await axios.get(`/user/${id}`);
        this.user.username = response.data.username;
        this.user.email = response.data.email;
        this.user.role = response.data.role;
        this.originalRole = response.data.role;
        this.originalUsername = response.data.username;
      this.originalEmail = response.data.email;
      } catch (error) {
        console.error(error);
      }
    },

    updateUser() {
  const updatedUser = {
    id: this.id,
  };
  if (this.user.username !== this.originalUsername) {
    updatedUser.username = this.user.username;
  }
  if (this.user.email !== this.originalEmail) {
    updatedUser.email = this.user.email;
  }
  if (this.user.role !== this.originalRole) {
    updatedUser.role = this.user.role;
}
  
    if (Object.keys(updatedUser).length > 0) {
    
    axios
      .put(`/user/`, updatedUser)
      .then((res) => {
        console.log(res.data);
        this.$refs.form.reset();
        this.$router.push("/users");
      })
      .catch((error) => console.log(error));
  } else {
    console.log("No changes were made.");
  }
}

  },

};
</script>

<style>
</style>