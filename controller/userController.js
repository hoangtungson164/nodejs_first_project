var express = require('express');
var router = express.Router();
var con = require('/home/user/nodejs_crud/config/database.js');
var con

router.get('/', function (req, res) {
    var sql = "SELECT * FROM users";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Success get database");
        res.status(200).json(result);
    });
})

router.get('/:id', function (req, res) {
    var sql = "SELECT id, name FROM new_table WHERE id = " + req.params.id;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Success get one object");
        res.status(200).json(result[0]);
    });
})

router.post('/', function (req, res) {
    var sql = "INSERT INTO new_table (id, user_name, user_password) VALUES ('" + req.body.id + "', '" + req.body.user_name + "', '" + req.body.user_password + "')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Success create new row");
        res.status(200).json('Success to create new row');
    });
})

router.put('/:id', function(req, res) {
    var sql = "UPDATE new_table SET name = " + "'" + req.body.name + "'" + " WHERE id = " + req.params.id;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Success update row");
        res.status(200).json();
    }); 
})

router.delete('/:id', function(req, res) {
    var sql = "DELETE FROM new_table WHERE id = " + req.params.id;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Success delete row");
        res.status(200).json(result);
    }); 
})

module.exports = router;