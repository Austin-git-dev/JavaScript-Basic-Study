// prompt
// cd == c드라이브 열기(현재 열고 있는 폴더)
// d == d드라이브 열기(현재 열고 있는 폴더)
// cd.. == 상위 폴더로 이동
// cd../.. == 상위-상위 폴더로 이동 
// dir == 현재 폴더에 들어있는 폴더와 쓸 수 있는 메모리 정보, 파일 이름 확인

const express = require('express')
const cors = require('cors')
const path = require('path');
const app = express()

const port = 3456
app.use(cors())
// css 연결
app.use(express.static('../public'));

// port(여기에서는 3456번)에 서버 개설
app.listen(port, () => {
  console.log("server on")
})

// cd == web/week1/htmltest 일때,
// filname == file 명을 포함한 절대경로 ex) web/week1/htmltest/파일명(ex --> index.html)
// dirname == file 명을 제외한 절대경로 ex) web/week1/htmltest


// 서버로 html파일 전송
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "../views/thtml.html"))
})
// 오류발생(?) --> 이유를 모르겠음
// app.get('/', function (req, res) {
//   res.sendFile(__dirname + "../views/thtml.html")
// }

app.get('/2', function (req, res) {
  res.sendFile(path.join(__dirname, "../views/thtml2.html"))
})

app.get('/2/3', function (req, res) {
  res.sendFile(path.join(__dirname, "../views/thtml3.html"))
})

app.get('/2/loginfail', function(res, req) {
  res.sendFile(path.join(__dirname, "../views/loginfail.html"))
  console.log("로그인 실패")
})

// app.post('/2/3', function(res, req) {
//  res.sendFile(path.join(__dirname, "../views/thtml3.html")
//  console.log("로그인 성공")
// })

// app.post('/2/loginfail', function(res, req) {
//   res.sendFile(path.join(__dirname, "../views/loginfail.html"))
//   console.log("로그인 실패")
// })