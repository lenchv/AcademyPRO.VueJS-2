import dbService from './dbService';

export default (() => {
    let id = 1;

    return {
        getId() {
            return id++;
        },

        getUser({ name, email }, id) {
            id = id || this.getId();

            return {
                id, name, email
            };
        },

        addUser(data) {
            const user = this.getUser(data);
            
            dbService.addUser(data).then((doc) => {
                user.id = doc.id;
            }).catch(console.error);
            
            return user;
        },

        editUser(user, data) {
            user.name = data.name;
            user.email = data.email;
            
            dbService.editUser(user);

            return user;
        },

        deleteUser(users, user) {
            const i = users.indexOf(user);

            if (i !== -1) {
                users.splice(i, 1);
                dbService.deleteUser(user);
            }

            return users;
        },

        getUsers() {
            return new Promise((resolve, reject) => {
                dbService.getUsers().then((querySnapshot) => {
                    const data = [];

                    querySnapshot.forEach(doc => {
                        data.push(this.getUser(doc.data(), doc.id));
                    });

                    resolve(data);
                }).catch(reject);    
            });
        }
    };
})();