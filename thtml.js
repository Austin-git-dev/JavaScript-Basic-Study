const express = require('express')
const app = express()
const port = 3456

// filname == file 명을 포함한 절대경로 ex) web/week1/htmltest/thtml.js
// dirname == file 명을 제외한 절대경로 ex) web/week1/htmltest
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/thtml.html")
})

app.get('/2', function (req, res) {
  res.sendFile(__dirname + "/thtml2.html")
})

app.get('/2/3', function (req, res) {
  res.sendFile(__dirname + "/thtml3.html")
})

app.listen(port, () => {
    console.log("나의 웹페이지")
})