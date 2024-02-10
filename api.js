import { con } from "./mysql.js";

import express from "express";

const app = express();

import parser from "body-parser";

const urlencodedpase = parser.urlencoded({ extended: false });

app.use(express.json());
var arry =[]
app.get("/kaio", (req, res) => res.json(arry));

app.get("/kaio2", (req, res) => {
  res.send(req.query.nome);
  const obj = req.query.nome; 
  arry.push({ pl: obj });
  
  con.connect(function (err) {
    if (err) {
      throw err;
    }
    console.log("Connected!");

    var sql = `INSERT INTO açoes (name) VALUES ('${req.query.nome}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
});


/*con.connect(function (err){
  if(err) {throw err}
  con.query("SELECT * FROM açoes", function (err, result, fields) {
    if (err) throw err;
    
      
    app.get('/kaio3', (req, res)=>{res.json(result)})
      

   
  }); 
})*/

app.listen(process.env.PORT || 3000, () => console.log("api ligada"));
