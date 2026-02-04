const { name } = require("ejs");
const express = require("express");
const app = express();
const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student",
});
con.connect((error) => {
  if (error) throw error;
  console.log("connect success");
});

app.get("/", (req, res) => {
    var qry=`SELECT * FROM student1 `
    con.query(qry, (error,data) =>{
          if (error) throw error
  res.render("app.ejs",{data});

    })
});
app.get("/CreateData", (req, res) => {
  const data = req.query;
  const {id,name,surname,age}= data
   var qry=`INSERT INTO student1( name, surname, age) VALUES ('${name}','${surname}','${age}')`
   con.query(qry ,(error) =>{
    if (error) throw error
    console.log("data enter success");
    
   })
  res.redirect("/");
});
app.get("/DeleteData/:id" ,(req,res) =>{
    const deleteid=req.params.id
    var qry=`DELETE FROM student1 WHERE id='${deleteid}'`
    con.query(qry ,(error) =>{
        if(error) throw error
        console.log("data delete sucess");
        
    })
})

app.listen(3000);
