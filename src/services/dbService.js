export default (() => {
    var _instance = null;

    return {
        init() {
            // Initialize Firebase
            var config = {
                apiKey: "AIzaSyCy4SUQXYpYT8ZzYV9MzUQYZGQ6sjOeoZk",
                authDomain: "academypro-vuejs-2.firebaseapp.com",
                databaseURL: "https://academypro-vuejs-2.firebaseio.com",
                projectId: "academypro-vuejs-2",
                storageBucket: "academypro-vuejs-2.appspot.com",
                messagingSenderId: "644643471310"
              };
            
            firebase.initializeApp(config);

            _instance = firebase.firestore();
        },
        addUser(user) {
            return _instance.collection("users").add({
                name: user.name,
                email: user.email
            });
        },
        getUsers() {
            return _instance.collection("users").get();
        },
        deleteUser(user) {
            _instance.collection("users").doc(user.id).delete().then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
        },
        editUser(user) {
            _instance.collection("users").doc(user.id).set({
                name: user.name,
                email: user.email
            }).then(() => {
                console.log("Document successfully saved!");
            }).catch((error) => {
                console.error("Error editing document: ", error);
            });
        }
    };
})();