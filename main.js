var bodyParser = require("body-parser");
var express = require("express");
var app = express();
app.use(express.static(__dirname+'/public'));
app.listen(3019, function(){
    // Console will print the message  
console.log('Server running at http://127.0.0.1:3019');
})
 