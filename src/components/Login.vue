<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1>Login</h1>
          <form>
            <div class="mb-3">
              <label for="inputUsername" class="form-label">Username</label>
              <input id="inputUsername" v-model="username" type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="inputPassword" class="form-label">Password</label>
              <input type="password" v-model="password" class="form-control" id="inputPassword" />
            </div>
            <button type='button' class="btn btn-primary login" @click="login">Login</button>
            <button type='button' class="btn btn-danger" @click="logout">logout</button>
            </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { useLoginStore } from '@/stores/loginStore'

export default {
    setup() {
        const store = useLoginStore();
        return {store};
    },
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login(){
      this.store.login(this.username, this.password)
    },
    logout(){
      this.store.logout();
    }
  },
};
</script>

<style>

</style>