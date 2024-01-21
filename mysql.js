import MYSQL from 'mysql'

const con= MYSQL.createConnection({
    host:'sql12.freesqldatabase.com',
    user:'sql12678236',
    password:'dNvljTKfZN',
    database:'sql12678236',
    port:'3306'
})

export {con}