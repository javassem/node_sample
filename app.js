const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("서버실행");
});

// 해당요청이 들어오면 지정한 함수 호출(콜백함수)
app.get("/", (req, res) => {
  res.send("노드헬로우");
});