import { defineStore } from 'pinia'
import axios from '../axios-auth.js'

export const useLoginStore = defineStore('loginStore', {
  state: () => ({
    token: '',
    username: '',
    role: '',
    expiration: ''
  }),
  getters: {
    isLoggedIn: (state) => state.token != '',
  },
  actions: {
    login(username, password) {
        axios.post("/login", { username: username, password: password})
        .then(result => { 
            this.username = result.data.user.username;
            this.token = result.data.accessToken;
            this.role = result.data.
            axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
            localStorage.setItem("token", this.token,)
            localStorage.setItem("username", this.username,)
            this.expiration = result.data.expireAt;
            console.log(result.data);
        }).catch(error => console.log(error));
    },
    restoreState(){
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    if (token && username){
        this.token = token;
        this.username = username;

        axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
        
    }
  }
  },
})