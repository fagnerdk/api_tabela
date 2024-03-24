import mysql from 'mysql';

var con = mysql.createConnection({

  host: "dpg-cn2m5kmd3nmc739esg40-a",
  user: "dbacoes_user",
  password: "kYBubTiYbIGeBZY4OvevbamLi4RpjSDM",
  port:5432,
  database: "dbacoes",
  
});
//postgres://dbacoes_user:kYBubTiYbIGeBZY4OvevbamLi4RpjSDM@dpg-cn2m5kmd3nmc739esg40-a/dbacoes
con.connect(function (err) {
  if (err) {
    throw err;
  }
  console.log("Connected!");

});

//export {con}



/*host: "dpg-cn2m5kmd3nmc739esg40-a",
  user: "dbacoes_use",
  password: "kYBubTiYbIGeBZY4OvevbamLi4RpjSDM",
  port:5432,
  database:"dbacoes",
*/