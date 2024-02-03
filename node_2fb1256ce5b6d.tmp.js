
//import {con} from './mysql.js'

import express from "express";
const app = express()

import parser from "body-parser";
const urlencodedpase = parser.urlencoded({ extended: false });

app.use(express.json())
app.get('./kaio',(req,res)=>{res.json({'kaio':'oo'})})

/*con.connect(function (err){
  if(err) {throw err}
  con.query("SELECT * FROM acoes", function (err, result, fields) {
    if (err) throw err;
    
      
    app.get('/kaio', (req, res)=>{res.json(result)})
      

   
  }); 
})*/

app.listen(process.env.PORT || 3000,()=>console.log('api ligada'))