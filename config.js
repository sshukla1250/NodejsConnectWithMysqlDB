var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "company"
});

con.connect((err)=>{
    if(err) {
    console.log('Error is in connection!')
  }
});
module.exports=con;
