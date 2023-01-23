<template>
  <section>
    <div class="container">
      <h2 class="mt-3 mt-lg-5">Welcome to the homepage of the CMS for the CardDisc application</h2>
      <div class="flexbox-wrapper">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Managing Users</h5>
          <p class="card-text">To add, edit or delete users</p>
          <a href="/users" class="btn btn-primary">Go to Users</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Managing Cards</h5>
          <p class="card-text">To add, edit or delete cards</p>
          <a href="/cards" class="btn btn-primary">Go to Cards</a>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>

</style>