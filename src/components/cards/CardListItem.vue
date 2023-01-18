<template>
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 p-2">
    <div class="card product-card h-100">
      <div class="card-body">
        <h2>{{card.cardNumber}}</h2>
        <div class="float-start">
          <p>{{ card.cardName }}</p>
          <p>
            <small>{{ card.cardBody }}</small>
          </p>
        </div>
        <!-- <span class="price float-end">{{ card.type }}</span> -->
      </div>
      <div class="card-footer">
        <button class="btn btn-warning" @click="editCard(card.id)">Edit</button>&nbsp;&nbsp;
        <button class="btn btn-danger" @click="deleteCard(card.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../../axios-auth'

export default {
  name: "CardListItem",
  props: {
    card: Object,
  },
  methods: {
    deleteCard(id) {
      axios
        .delete("https://cardisc.azurewebsites.net/api/cards/" + id)
        .then((result) => {
          console.log(result);
          this.$emit('update')
        })
        .catch((error) => console.log(error));
    },
    editCard(id) {
      this.$router.push('/editcard/' + id);
    }
  },
};
</script>

<style>
</style>