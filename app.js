// const { name } = require("ejs");
// const express = require("express");
// const app = express();
// const mysql = require("mysql");

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "student",
// });
// con.connect((error) => {
//   if (error) throw error;
//   console.log("connect success");
// });

// app.get("/", (req, res) => {
//   var qry = `SELECT * FROM student1 `;
//   con.query(qry, (error, data) => {
//     if (error) throw error;
//     res.render("app.ejs", { data ,EditData:null});
//   });
// });
// app.get("/CreateData", (req, res) => {
//   const data = req.query;
//   const { id, name, surname, age } = data;
//    var qry=""
//   if (id != ""){
//      qry=`UPDATE student1 SET name='${name}',surname='${surname}',age='${age}' WHERE id='${id}' `
//   }
//   else{
//       qry = `INSERT INTO student1( name, surname, age) VALUES ('${name}','${surname}','${age}')`;
//   }
//   con.query(qry, (error) => {
//     if (error) throw error;
//     // console.log("data enter success");
//   });
//   res.redirect("/");
  
  
  
// });
// app.get("/DeleteData/:id", (req, res) => {
//   const deleteid = req.params.id;
//   var qry = `DELETE FROM student1 WHERE id='${deleteid}'`;
//   con.query(qry, (error) => {
//     if (error) throw error;
//     console.log("data delete sucess");
//   });
//   res.redirect("/");
// });
// app.get("/EditData/:id" ,(req,res) =>{
//   const Editid=req.params.id
//   var qry=`SELECT * FROM student1 WHERE id='${Editid}'`
//   var qry1 =`SELECT * FROM student1`
//   con.query(qry,(error,EditData) =>{
//     con.query(qry1,(error,data) =>{
//       //  console.log(EditData);
//        res.render("app.ejs",{EditData:EditData[0],data})
       
//     })
//   })

// })

// app.listen(3000);



const express =require("express")
const app = express()
const mysql = require ("mysql")

const con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"student"
})
con.connect((error) =>{
  if(error) throw error
  console.log("connect success");
})


app.get("/" ,(req,res) =>{
  var qry =`SELECT * FROM student1`
  con.query(qry,(error,data) =>{
    if (error) throw error
   res.render("app.ejs",{data,Editdata:null})
    
  })
})

app.get ("/CreateData" ,(req,res) =>{
  const data =req.query
   console.log(data);
   const {id,name,surname ,age}=data;
   var qry=""
   if(id != "")
   {
      qry = `UPDATE student1 SET name='${name}',surname='${surname}',age='${age}' WHERE id='${id}'`
   }
   else{
    qry=`INSERT INTO student1( name, surname, age) VALUES ('${name}','${surname}','${age}')`
    
   }
   con.query(qry ,(error) =>{
    if (error) throw error
    console.log("data enter success");
   })
  res.redirect("/")
})
app.get("/DeleteData/:id" ,(req,res) =>{
  const deleteid =req.params.id
  var qry=`DELETE FROM student1 WHERE id='${deleteid}'`
  con.query(qry,(error) =>{
    if (error) throw error
    console.log("delete success");
    
  })
  res.redirect("/")
})
app.get("/Editdata/:id" ,(req,res) =>{
  const editid=req.params.id
  var qry=`SELECT * FROM student1 WHERE id='${editid}'`
  var qry1=`SELECT * FROM student1`
  con.query(qry,(error,Editdata) =>{
    con.query(qry1,(error,data) =>{
      console.log(Editdata);
      
      res.render("app.ejs" ,{Editdata:Editdata[0],data})
    })
  })
})



app.listen(3001)
