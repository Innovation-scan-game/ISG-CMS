<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <router-link to="/api/cms/" class="nav-link" active-class="active"
            >Home</router-link
          >
        </li>      
        <li class="nav-item">
          <router-link to="/api/cms/cards" class="nav-link" active-class="active"
            >Cards</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/api/cms/users" class="nav-link" active-class="active"
            >Users</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/api/cms/login" class="nav-link" active-class="active"
            >Login</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style>
</style>