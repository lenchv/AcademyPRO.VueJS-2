<template>
  <div id="app">
    <app-header>
      <div class="col">
        <add-user @addUser="addUser"></add-user>
      </div>
    </app-header>
    <user-list 
      v-bind:users="users"
    />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './components/UserList.vue'; 
import Header from './components/Header.vue'; 
import AddUser from './components/AddUser.vue';

import userService from './services/userService';

export default {
  name: 'app',
  components: {
    "app-header": Header, 
    UserList, 
    AddUser
  },
  data () {
    return {
      users: []
    }
  },
  methods: {
    addUser(data) {
      this.users.push(userService.addUser(data));
    }
  },

  created() {
    userService.getUsers().then((users) => {
      users.forEach(user => this.users.push(user));
    }).catch(console.error);
  }
}
</script>

<style lang="scss">
</style>
