const express = require('express')
const bodyParser = require('body-parser')
const http = require('http');

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const server = http.createServer((req, res) => {
    res.end('socket.io Sample');
});

server.listen(3001);


app.use(express.static('public'))

app.listen(3000, function () {
    console.log("start! express server on port 3000")
})


app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    res.render("main")
})

app.post('/login', function (req, res) {
    if (req.body.login == 1301) {
        res.render('loginSuccess')
    } else {
        res.render('loginFail', { 'login': req.body.login });
    }
})

app.get('/write', function (req, res) {
    res.render('write');
})