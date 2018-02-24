<template>
  <div class="col-sm-3">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ user.name }}</h5>
            <p class="card-text">{{ user.email }}</p>
            <a href="#" class="btn btn-primary" @click.prevent="editUser(user, user)">Edit</a>
            <a href="#" class="btn btn-outline-danger" @click.prevent="deleteUser(user)">Delete</a>
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
