<template>
    <div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" v-bind:class="{ show: isShow, 'd-block': isDisplayBlock }" @click="close()">
        <div class="modal-dialog" role="document" @click.stop>
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"><slot name="title"></slot></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close()">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <slot name="content"></slot>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="close()">Close</button>
                <button type="button" class="btn btn-primary" @click="ok()">Ok</button>
            </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            isShow: false,
            isDisplayBlock: false
        };
    },
    backdrop: null,
    watch: {
        show(newVal, oldVal) {
            if (newVal) {
                document.body.classList.add('open-modal');
                this.backdrop = document.createElement('div');
                this.backdrop.classList.add("modal-backdrop", "fade");
                document.body.appendChild(this.backdrop);
                
                this.backdrop.classList.add("show");
                this.isDisplayBlock = true;
                setTimeout(() => {
                    this.isShow = true;
                }, 100);
            } else {
                document.body.classList.remove('open-modal');

                this.isShow = false;
                this.backdrop.classList.remove("show");                
                setTimeout(() => {
                    this.isDisplayBlock = false;
                    this.backdrop.remove();
                }, 100);                
            }
        }
    },

    methods: {
        close() {
            this.$emit('onClose');
        },

        ok() {
            this.$emit('onOk');
        }
    },

    destroyed() {
        if (this.backdrop) {
            document.body.classList.remove('open-modal');
            this.backdrop.remove();
        }
    }
}
</script>
