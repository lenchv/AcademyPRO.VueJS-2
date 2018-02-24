<template>
  <div class="col-sm-3">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ user.name }}</h5>
            <p class="card-text">{{ user.email }}</p>
            <a href="#" class="btn btn-primary" @click.prevent="toggleModal()">Edit</a>
            <a href="#" class="btn btn-outline-danger" @click.prevent="deleteUser(user)">Delete</a>
        </div>
    </div>
    <edit-user-modal v-bind:show="showEditModal" v-bind:user="user" @onClose="this.toggleModal" @editUser="editUser" />
  </div>
</template>


<script>
import EditUserModal from './EditUserModal.vue';

export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    components: {
        EditUserModal
    },
    data() {
        return {
            showEditModal: false
        };
    },
    methods: {
        deleteUser(user) {
            this.$emit('deleteUser', user);
        },

        editUser(data) {
            this.toggleModal();
            this.$emit('editUser', this.user, data);
        },

        toggleModal() {
            this.showEditModal = !this.showEditModal;
        }
    }
}
</script>

<style>
    .card {
        margin: 15px 0;
    }
</style>

