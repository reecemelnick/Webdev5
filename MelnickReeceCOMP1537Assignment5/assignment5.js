const express = require('express');
const app = express();
app.use(express.json());
const fs = require('fs');
var path = require('path')

app.use("/js", express.static("./public/js"));
app.use("/css", express.static("./public/css"));
app.use("/img", express.static("./public/img"));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {
    let doc = fs.readFileSync("./app/html/index.html", "utf8");
    res.send(doc);
});


let port = 8000;
app.listen(port, function () {
    console.log('Server is running on port: ' + port);
});
