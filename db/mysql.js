var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'employees' ///USE db1
})

connection.connect(function (err) {
    if (err) return console.log(err);
    console.log("Connected!");
});

module.exports = connection;
