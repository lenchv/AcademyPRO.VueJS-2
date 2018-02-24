<template>
    <div class="container">
        <div class="row">
            <user-item v-for="user in users" 
                :key="user.id"
                :user="user"
                @deleteUser="deleteUser"
                @editUser="editUser"
            />
        </div>
    </div>
</template>

<script>
import userService from '../services/userService';
import UserItem from './UserItem.vue';

export default {
    props: {
        users: {
            type: Array,
            required: true
        }
    },

    components: {
        UserItem
    },

    methods: {
        deleteUser(user) {
            userService.deleteUser(this.users, user);
        },

        editUser(user, data) {
            userService.editUser(user, data);;
        }
    }
}
</script>
