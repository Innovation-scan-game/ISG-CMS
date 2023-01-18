<template>
  <navigation />
  <router-view />
</template>

<script>
import Navigation from './components/Navigation.vue'
import { useLoginStore } from '@/stores/loginStore'

export default {
    setup() {
        const store = useLoginStore();
        return {store};
    },
  name: "App",
  components: {
    Navigation
  },
  mounted() {
    this.store.restoreState();
  }
};
</script>

<style>
</style>
