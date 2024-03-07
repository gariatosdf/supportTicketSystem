const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pass@123',
    database: 'sts_express'
  })
  
  module.exports = connection;