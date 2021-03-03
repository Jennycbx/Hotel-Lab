<template>
  <div class="guest">
      <h2>Name: {{ guest.name }}</h2>
      <p>Email: {{ guest.email }}</p>
      <p>Date Booked: {{ guest.date|formatDate }}</p>
      <p>Is guest checked in?  {{ guest.checkin }}</p>

      <button v-on:click="handleDelete(guest._id)">Delete Booking</button>
  </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    name: 'guest',
    props: ['guest'],
    filters: {
      formatDate(value) {
        return new Date(value).toLocaleString().substring(0, 10);
      }
    },
    methods: {
        handleDelete(id) {
            eventBus.$emit('delete-guest', id);
        }
    }
}
</script>
 
<style>

button {
    background-color: red;
    border: 1px solid white;
    color: white;
    font-size: 15px;
    padding: 8px 8px;
    text-decoration: none;
    cursor: pointer;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
}

 .guest {
    background: rgba(255, 255, 255, 0.7);
    margin-bottom: 20px;
    padding: 25px;
    display: grid;
    align-content: center;
     margin-left: auto;
    margin-right: auto;
    width: 15em
}

</style>