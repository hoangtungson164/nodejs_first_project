var express = require('express');
var router = express.Router();
var con = require('/home/user/nodejs_crud/config/database.js');

router.get('/', function (req, res) {
    var sql = "SELECT * FROM new_table";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Success get table");
        res.status(200).json(result);
    });
})

router.get('/:id', function (req, res) {
    var sql = "SELECT * FROM new_table WHERE id = " + req.params.id;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Success get one object");
        res.status(200).json(result[0]);
    });
})

router.post('/', function (req, res) {
    var sql = "INSERT INTO new_table (name, hobby, job, country) VALUES ('"
     + req.body.name + "','" + req.body.hobby + "', '" + req.body.job + "', '" + req.body.country + "')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Success create new row");
        res.status(200).json('Success to create new row');
    });
})

router.put('/:id', function(req, res) {
    var sql = "UPDATE new_table SET name = " 
    + "'" + req.body.name + "', hobby = "
    + "'" + req.body.hobby + "', job = "
    + "'" + req.body.job + "', country = "
    + "'" + req.body.country + "'"
    + " WHERE id = " + req.params.id;
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