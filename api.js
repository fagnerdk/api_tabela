import {con} from './mysql'
import express from "express";
const app = express()

import parser from "body-parser";
const urlencodedpase = parser.urlencoded({ extended: false });

app.use(express.json())

con.connect(function(err){
  if(err) {throw err}
  con.query("SELECT * FROM acoes", function (err, result, fields) {
    if (err) throw err;

    app.get('/kaio', (req, res)=>{res.json(result)})
    
    console.log(result);
    var x =document.getElementById('v')
    x.innerHTML=result
  });
})


app.listen(process.env.PORT || 3000)