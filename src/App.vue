<template>
  <div id="app">
    <user-list 
      v-bind:users="users"
    />
  </div>
</template>

<script>
import UserList from './components/UserList.vue'; 

export default {
  name: 'app',
  components: {
    UserList
  },
  data () {
    return {
      users: [{
        id: 1,
        name: "Ivan",
        email: "ivan@mail.com"
      }, {
        id: 2,
        name: "Petro",
        email: "petro@mail.com"
      }]
    }
  }
}
</script>

<style lang="scss">
  
</style>
