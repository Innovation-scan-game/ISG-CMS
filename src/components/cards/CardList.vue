<template>
  <section>
    <div class="container">
      <div class="form-group">
        <input type="text" class="form-control" v-model="searchTerm" placeholder="Search for a card...">
      </div>
      <h2 class="mt-3 mt-lg-5">Cards</h2>
        <button type="button" class="btn btn-primary mt-3" @click="this.$router.push('/createcard');">
            Add Cards
          </button>
      <div class="row mt-3">
        <card-list-item
          v-for="card in filteredCards"
          :key="card.id"
          :card="card"
          @update="update"
        />
      </div>
    </div>
  </section>
</template>
<script>
import axios from "../../axios-auth.js";

import CardListItem from "./CardListItem.vue";

export default {
  name: "CardList",
  components: {
    CardListItem,
  },
  data() {
    return {
      cards: [],
      searchTerm: ''
    };
  },
  computed: {
    filteredCards() {
      return this.cards.filter(card => {
        return card.cardBody.toLowerCase().includes(this.searchTerm.toLowerCase())
      })
    }
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      axios
        .get("/cards")
        .then((result) => {
          console.log(result);
          this.cards = result.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
<style>
</style>