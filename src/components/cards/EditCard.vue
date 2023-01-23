<template>
  <section>
    <div class="container">
      <form ref="form">
        <h2 class="mt-3 mt-lg-5">Edit card</h2>
        <h5 class="mb-4"></h5>

        <div class="input-group mb-3">
          <span class="input-group-text">Card Id</span>
          <input type="text" :value="this.card.Id" class="form-control" disabled/>
        </div>


        <div class="input-group mb-3">
          <span class="input-group-text">Card Title</span>
          <input type="text" class="form-control" v-model="card.Name" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Card Question</span>
          <textarea
            class="form-control"
            v-model="card.Body"
          ></textarea>
        </div>


        <div class="input-group mb-3">
          <span class="input-group-text">Card Category</span>
          <select class="form-select" v-model="card.Type">
            <option :value=0>Open answer</option>
            <option :value=1>Scalable</option>
            <option :value=2>Multiple choice</option>
          </select>
        </div>

      

        <div class="input-group mt-4">
          <button type="button" class="btn btn-primary" @click="updateCard">
            Save changes
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="this.$router.push('/cards')"
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
  name: "CreateCards",
  props: {
    id: String,
  },
  data() {
    return {
      card: {
        Id: this.id,
        Name: "",
        Body: "",
        Type: 0
      },
    };
  },
  methods: {
    updateCard() {
      parseInt(this.card.type)
      axios
      .put("https://cardisc.azurewebsites.net/api/cards", this.card)
        .then((res) => {
          console.log(res.data);
          this.$refs.form.reset();
          this.$router.push("/cards");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>