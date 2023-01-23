<template>
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 p-2">
    <div class="card product-card h-100">
      <div class="card-body">
        <h3>{{card.cardName}}</h3>
        <div class="float-start">
          <div v-if="card.type === 0">
            <p class="price">Type: Open answer question</p>
          </div>
          <div v-else-if="card.type === 1">
            <p class="price">Type: Scalable question</p>
          </div>
          <div v-else-if="card.type === 2">
            <p class="price">Type: Multiple choice question</p>
          </div>
          <p>
            <small>{{ card.cardBody }}</small>
          </p>
        </div>
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
      if(confirm("Do you really want to delete?")){
      axios
        .delete("/cards/" + id)
        .then((result) => {
          console.log(result);
          this.$emit('update')
        })
        .catch((error) => console.log(error));
    }
  },
    editCard(id) {
      this.$router.push('/api/cms/editcard/' + id);
    }
  },
};
</script>

<style>
</style>