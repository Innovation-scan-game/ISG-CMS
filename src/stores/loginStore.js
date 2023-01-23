import { defineStore } from 'pinia'
import { renderSlot } from 'vue';
import axios from '../axios-auth.js'
import router from '../router/index.js'

export const useLoginStore = defineStore('loginStore', {
  state: () => ({
    token: '',
    username: '',
    expiration: '',
    role: ''
  }),
  getters: {
    isLoggedIn: (state) => state.token != '',
  },
  actions: {
    login(username, password) {
      axios.post("/login", { username: username, password: password })
        .then(result => {
          this.username = result.data.user.username;
          this.token = result.data.accessToken;
          axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
          localStorage.setItem("token", this.token,)
          localStorage.setItem("username", this.username,)
          this.expiration = result.data.expireAt;
          console.log(result.data);
          axios.get("/user/" + result.data.user.id)
            .then(res => {
              console.log(res.data)
              if (res.data.role === "User") {
                
                this.logout();
              }
              else if (res.data.role === "Admin"){
                router.push("/");
              }
            }).catch(error => console.log(error));
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
  },
  logout(){
    localStorage.clear();
    location.reload();
  }
  },
})