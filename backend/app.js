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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


connection.connect(function(err) {
  if (err) {
    console.error('error');
  }
  console.log(connection.threadId + ': mysql connected')
});

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
  const { writer, title, text } = req.body;
  connection.query(`insert into board (writer, title, text) values ("${writer}", "${title}", "${text}")`, function(err, rows) {
    if (err) {
      console.error('error...', err);
      return;
    }
    res.send(200)
  })
})

app.put('/board', function (req, res) {
  const { idx, writer, title, text } = req.body;
  connection.query(`update board set writer="${writer}", title="${title}", text="${text}" where id=${idx}`, function(err, rows) {
    if (err) {
      console.error('error...', err);
      return;
    }
    res.send(200);
  })
})

app.delete('/board', function (req, res) {
  const { idx } = req.query;
  console.log('idx', idx)
  connection.query(`delete from board where id=${idx}`, function (err, rows) {
    if (err) {
      console.error('error...', err);
      return;
    }
    res.send(200);
  })
})

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중')
})
