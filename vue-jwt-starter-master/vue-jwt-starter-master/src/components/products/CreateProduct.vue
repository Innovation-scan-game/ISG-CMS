<template>
  <section>
    <div class="container">
      <form ref="form">
        <h2 class="mt-3 mt-lg-5">Create a card</h2>
        <h5 class="mb-4"></h5>

        <div class="input-group mb-3">
          <span class="input-group-text">Card Title</span>
          <input type="text" class="form-control" v-model="product.Name" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Card Question</span>
          <textarea
            class="form-control"
            v-model="product.Body"
          ></textarea>
        </div>


        <div class="input-group mb-3">
          <span class="input-group-text">Card Category</span>
          <!-- <select class="form-select" v-model="product.type">
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id">
              {{ category.name }}
            </option>
          </select> -->
        </div>

        <div class="input-group mt-4">
          <button type="button" class="btn btn-primary" @click="addProduct">
            Create Card
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="this.$router.push('/products')"
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
  name: "CreateProduct",
  data() {
    return {
      product: {
        Name: "",
        Body: "",
        type: 0
      },
    };
  },
  methods: {
    addProduct() {

      axios
        .post("https://cardisc.azurewebsites.net/api/cards", this.product
        )
        .then((res) => {
          console.log(res.data);
          this.$refs.form.reset();
          this.$router.push("/products");
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    // axios
    //   .get("http://localhost/categories")
    //   .then((result) => {
    //     console.log(result);
    //     this.categories = result.data;
    //   })
    //   .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>