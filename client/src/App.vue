<template>
    <div id="app">
      <guests-form />
      <guests-grid :guests="guests" />
    </div>
</template>

<script>
import { eventBus } from './main';

import GuestsForm from './components/GuestsForm';
import GuestsGrid from './components/GuestsGrid';
import GuestService from './services/GuestService';

export default {
  name: 'App',
  components: {
   'guests-form': GuestsForm,
   'guests-grid': GuestsGrid
  },
  data() {
    return{
      guests: []
    };
  },
  mounted() {
    this.fetchGuests();

    eventBus.$on('submit-guest', payload => {
      GuestService.postGuest(payload)
      .then(guest => this.guests.push(guest));
    });

    eventBus.$on('delete-guest', id => {
      GuestService.deleteGuest(id)
      .then(() => {
        const index = this.guests.findIndex(guest => guest._id === id);
        this.guests.splice(index, 1);

      });
    });
  },
  methods: {
    fetchGuests() {
      GuestService.getGuests()
      .then(guests => this.guests = guests);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: lightsteelblue;
 
}

</style>
