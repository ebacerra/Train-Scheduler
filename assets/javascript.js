var database = firebase.database();

console.log(database);

database.ref("").on("value", function (snapshot) {
    console.log(snapshot.val());
});