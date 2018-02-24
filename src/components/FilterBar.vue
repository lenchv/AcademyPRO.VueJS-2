<template>
    <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="filters[filter]">
        <select class="form-control" v-model="filter" @change="onChangeFilter">
            <option v-for="field in fields" v-bind:key="field" v-bind:value="field">{{ field }}</option>
        </select>
    </form>
</template>

<script>
export default {
    props: {
        fields: {
            type: Array,
            required: true
        },
        filters: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            filter: this.fields[0]
        };
    },
    methods: {
        onChangeFilter() {
            this.$emit('onChangeFilter', this.filter);
        }
    }
}
</script>
