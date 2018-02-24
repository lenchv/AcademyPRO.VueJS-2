<template>
  <div class="col-sm-3">
    <div class="card">
        <div class="card-body">
            <div class="card-title">{{ user.name }}</div>
            <p class="card-text">{{ user.email }}</p>
            <a class="btn btn-outline-danger" @click="deleteUser(user)">Delete</a>
            <a class="btn btn-primary" @click="editUser(user, user)">Edit</a>
        </div>
    </div>
  </div>
</template>


<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    },

    methods: {
        deleteUser(user) {
            this.$emit('deleteUser', user);
        },

        editUser(user, data) {
            this.$emit('editUser', user, data);
        }
    }
}
</script>
