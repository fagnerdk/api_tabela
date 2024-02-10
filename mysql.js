import mysql from 'mysql';

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Fagner1994@",
  port:3306,
  database: "db_açoes",
  
});



export {con}



/*host: "dpg-cn2m5kmd3nmc739esg40-a",
  user: "dbacoes_use",
  password: "kYBubTiYbIGeBZY4OvevbamLi4RpjSDM",
  port:5432,
  database:"dbacoes",
*/