const express = require('express')
const router = express.Router()
const mysql = require('mysql')

const connection = mysql.createConnection({

  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb'
})

connection.connect((err)=>{
  if (err) throw err
  console.log("connection to DB sucessful")}
)

router.get('/', (req, res) => {
    res.json('A SUCCESFUL FETCH on /')
})

router.post('/register', (req, res) => {
    
  const username = req.body.user.username
  const password = req.body.user.password

  let sql = `INSERT INTO table1 (Username, Password) VALUES (?,?)`
  const values = [
    username, password
  ]
  connection.query(sql, values, (err, result) => 
{
  if (err) throw err;
  console.log('database updated')
})
    res.send('end')
})

module.exports = router