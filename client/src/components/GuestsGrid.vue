<template>
  <div>
      <guest v-for="guest, index in guests" :key="index"
      :guest="guest" />
  </div>
</template>

<script>
import Guest from './Guest';

export default {
    name: 'guests-grid',
    components: {
        'guest': Guest
    },
    props: ['guests']
}
</script>

<style>

</style>