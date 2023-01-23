<template>
  <section>
    <div class="container">
      <form ref="form">
        <h2 class="mt-3 mt-lg-5">Create a user</h2>
        <h5 class="mb-4"></h5>

        <div class="input-group mb-3">
          <span class="input-group-text">User Name</span>
          <input type="text" class="form-control" v-model="user.username" placeholder="Enter Username" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">User Email</span>
          <textarea
            class="form-control"
            v-model="user.email"
            placeholder="Enter Email"
          ></textarea>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Password</span>
          <input type="password"
            class="form-control"
            v-model="user.password"
            placeholder="Enter Password"
          />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Re-enter Password</span>
          <input type="password"
            class="form-control"
            v-model="user.password2"
            placeholder="Reenter Password"
          />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Role</span>
          <select class="form-select" v-model="user.role" placeholder="Select Role">
            <option :value="'user'">User</option>            
          </select>
        </div>
             

        <div class="input-group mt-4">
          <button type="button" class="btn btn-primary" @click="addUser">
            Create User
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
  name: "CreateUser",
  data() {
    return {
      user: {
        username: "",
        email: "",        
        password:"",
        
      },
    };
  },
  methods: {
    addUser() {
  if (this.user.password == this.user.password2) {
    const payload = {
      username: this.user.username,
      email: this.user.email,
      password: this.user.password,
      };
    axios
      .post("https://cardisc.azurewebsites.net/api/user", payload)
      .then((res) => {
        console.log(res.data);
        this.$refs.form.reset();
        this.$router.push("/users");
      })
      .catch((error) => console.log(error));
  }
},
  },
  
};
</script>

<style>
</style>