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
        },

        editUser(user, data) {
            user.name = data.name;
            user.email = data.email;
            
            return user;
        },

        deleteUser(users, user) {
            const i = users.indexOf(user);

            if (i !== -1) {
                users.splice(i, 1);
            }

            return users;
        }
    };
})();