<template>
    <modal v-bind:show="show" @onOk="editUser()" @onClose="onClose()">
        <div slot="title">Edit User</div>
        <div slot="content">
            <div class="form-group">
                <label for="edit-user-name">Name:</label>
                <input type="text" class="form-control" placeholder="Name" v-model="name">
            </div>
            <div class="form-group">
                <label for="edit-user-email">E-Mail:</label>
                <input type="email" class="form-control" placeholder="E-Mail" v-model="email">
            </div>
        </div>
    </modal>
</template>

<script>
import Modal from './Modal.vue';

export default {
    props: {
        show: {
            type: Boolean,
            required: true
        },
        user: {
            type: Object,
            required: true
        }
    },
    components: {
        Modal
    },
    data() {
        return {
            name: this.user.name,
            email: this.user.email
        };
    },
    methods: {
        editUser() {
            this.$emit('editUser', { name: this.name, email: this.email });
        },
        onClose() {
            this.$emit('onClose');
        }
    }
}
</script>
