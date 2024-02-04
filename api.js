
import {con} from './mysql.js'

import express from "express";

const app = express()

import parser from  "body-parser"

const urlencodedpase = parser.urlencoded({ extended: false });

app.use(express.json())


app.get('/kaio', (req, res) => res.json(con))

app.get('/kaio2', (req, res) => {
   res.send(req.query.nome)
   const obj=req.query.nome
   con.push({'pl':obj})
})

/*
con.connect(function (err){
  if(err) {throw err}
  con.query("SELECT * FROM acoes", function (err, result, fields) {
    if (err) throw err;
    
      
    app.get('/kaio', (req, res)=>{res.json(result)})
      

   
  }); 
})
*/
app.listen(process.env.PORT || 3000,()=>console.log('api ligada'))