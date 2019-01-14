const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const morgan = require('morgan')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const mysql = require('mysql')
// const sequelize = require('./models').sequelize;
require('dotenv').config()

const app = express()
// sequelize.sync();
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'simple-board'
});


app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


connection.connect(function(err) {
  if (err) {
    console.error('error')
  }
  console.log('connected as id ', connection.threadId)
})

app.set('port', process.env.PORT || 8001)

app.get('/board', function (req, res) {
  connection.query('select * from board', function (err, rows) {
    if (err) {
      console.error('error')
      return;
    }
    console.log('rows', rows)
    res.json(rows)
  })
})

app.post('/board', function (req, res) {
  console.log('req', req.body)
  res.send('123')
})

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중')
})
