const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Include needed folders
app.use(express.static(__dirname + '/'), router);
app.use(express.static(__dirname + '/img'), router);

app.use(function(req, res, next) {
    res.status(404);
    res.send("404 Error");
});

let server = app.listen(3000, function(){
  console.log("App server is running on port 3000");
});