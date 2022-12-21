<template>
  <section>
    <div class="container">
      <form ref="form">
        <h2 class="mt-3 mt-lg-5">Edit card</h2>
        <h5 class="mb-4"></h5>

        <div class="input-group mb-3">
          <span class="input-group-text">Card Title</span>
          <input type="text" class="form-control" v-model="product.cardName" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Card Question</span>
          <textarea
            class="form-control"
            v-model="product.cardBody"
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
          <button type="button" class="btn btn-primary" @click="updateProduct">
            Save changes
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
  props: {
    id: Number,
  },
  data() {
    return {
      product: {
        cardName: "",
        cardBody: "",
        type: 0
      },
    };
  },
  methods: {
    updateProduct() {
      axios
        .put("https://cardisc.azurewebsites.net/api/cards/" + this.product.id, this.product)
        .then((res) => {
          console.log(res.data);
          this.$refs.form.reset();
          this.$router.push("/products");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>