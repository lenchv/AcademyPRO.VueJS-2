<template>
    <modal v-bind:show="show" @onOk="addUser()" @onClose="onClose()">
        <div slot="title">Add User</div>
        <div slot="content">
            <div class="form-group">
                <label for="add-user-name">Name:</label>
                <input type="text" class="form-control" placeholder="Name" v-model="name">
            </div>
            <div class="form-group">
                <label for="add-user-email">E-Mail:</label>
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
        }
    },
    components: {
        Modal
    },
    data() {
        return {
            name: "",
            email: ""
        };
    },
    methods: {
        clear() {
            this.name = "";
            this.email = "";
        },
        addUser() {
            this.$emit('addUser', { name: this.name, email: this.email });
            this.clear();
        },
        onClose() {
            this.$emit('onClose');
            this.clear();
        }
    }
}
</script>
