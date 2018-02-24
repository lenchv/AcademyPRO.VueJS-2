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
            const i = this.users.indexOf(user);

            if (i !== -1) {
                this.users.splice(i, 1);
            }
        },

        editUser(user, data) {

        }
    }
}
</script>
