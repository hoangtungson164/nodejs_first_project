const bcrypt = require('bcrypt');
var password;

bcrypt.hash('myPassword', 10, function (err, hash) {
    console.log(hash);
    password = hash;
})

bcrypt.compare('myPassword', 10, function (err, hash) {
    if (hash == password) {
        console.log("it's matched")
    } else {
        console.log("it's not match")
    }
});
