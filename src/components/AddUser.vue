<template>
    <div>
        <button class="btn btn-success" @click.prevent="toggleModal()">Add User</button>
        <add-user-modal v-bind:show="show" @addUser="addUser" @onClose="toggleModal"/>
    </div>
</template>

<script>
import AddUserModal from './AddUserModal.vue';

export default {
    components: {
        AddUserModal
    },
    data() {
        return {
            show: false
        };
    },
    methods: {
        toggleModal() {
            this.show = !this.show;
        },
        addUser(data) {
            this.toggleModal();
            this.$emit('addUser', data);
        }
    }
}
</script>
