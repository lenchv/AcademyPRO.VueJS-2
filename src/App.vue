<template>
  <div id="app">
    <app-header>
      <div class="navbar-nav">
        <add-user @addUser="addUser"></add-user>
      </div>
      <filter-bar 
        v-bind:fields="fields"
        v-bind:filters="filters"
        @onChangeFilter="changeFilter"
      />
    </app-header>
    <user-list 
      v-bind:users="filterUsers"
    />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './components/UserList.vue'; 
import Header from './components/Header.vue'; 
import AddUser from './components/AddUser.vue';
import FilterBar from './components/FilterBar.vue';

import userService from './services/userService';

export default {
  name: 'app',
  components: {
    "app-header": Header, 
    UserList, 
    AddUser,
    FilterBar
  },
  data () {
    return {
      users: [],
      fields: [ "name", "email" ],
      filters: {
        email: "",
        name: ""
      },
      filter: "name"
    }
  },
  computed: {
    filterUsers() {
      const query = this.filters[this.filter].trim().toLowerCase();
      
      return this.users.filter(user => user[this.filter].toLowerCase().search(query) !== -1);
    }
  },
  methods: {
    addUser(data) {
      this.users.push(userService.addUser(data));
    },
    changeFilter(filter) {
      this.filter = filter;
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
