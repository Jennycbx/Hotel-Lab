<template>
  <form id="guests-form" v-on:submit.prevent="handleSubmit">
      <h2 id="add-guest">ADD A GUEST</h2>
      <div class="formWrap">
          <label for="name">Name: </label>
          <input type="text" id="name" v-model="name" />
      </div>
      <div class="formWrap">
          <label for="email">Email: </label>
          <input type="text" id="email" v-model="email" />
      </div>
      <div class="formWrap">
          <label for="date">Date: </label>
          <input type="date" id="date" v-model="date" />
      </div>
      <div class="formWrap">
          <label for="checkin">Checked in: </label>
          <label for="checkin">Yes</label>
          <input type="radio" name='choice' value='Yes' v-model="checkin">
          <label for="checkin">No</label>
          <input type="radio" name='choice' value='No' v-model="checkin">
      </div>

      <input type="submit" value="Save" id="save"/>
    </form>
</template>

<script>
import { eventBus } from '../main';
export default {
    name: 'guests-form',
    data() {
        return {
            name: '',
            email: '',
            date: null,
            checkin: null
        }
    },
    methods: {
        handleSubmit() {
            const payload = {
                name: this.name, 
                email: this.email, 
                date: this.date,
                checkin: this.checkin
            };

            eventBus.$emit('submit-guest', payload);
            this.name = '';
            this.email = '';
            this.date = null;
            this.checkin = null;
        }
    }
}   
</script>

<style>
    #add-guest {
        font-size: 40px;
    }

    form {
	width: 75%;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.7);
	padding: 40px;
	margin-bottom: 60px;
    }

    .formWrap {
	margin-bottom: 10px;
    margin: 5px;
    border-radius: 5px;
    color: black;
    padding: 10px; 
    text-decoration: none;
    font-size: 20px;
    cursor: pointer; 
    }

    .formWrap {
        cursor: pointer;
    }

    .formWrap > input:hover {
        background-color:lightgray;
    }

    #save {
    background-color: #60B99A;
    border: 1px solid white;
    color: white;
    font-size: 20px;
    padding: 10px 10px;
    text-decoration: none;
    cursor: pointer;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
    }

    #save:hover {
        background-color: lightgray;
    }
    
</style>