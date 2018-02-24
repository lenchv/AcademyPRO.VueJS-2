export default (() => {
    let id = 1;

    return {
        getId() {
            return id++;
        },

        getUser({ name, email }) {
            return {
                id: this.getId(),
                name,
                email
            };
        }
    };
})();