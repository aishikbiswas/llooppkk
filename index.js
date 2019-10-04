var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();
const cors = require('cors')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.sendfile("index.html");
});
app.post('/login',cors(),function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end(`<html>
  <head>
    <title>Simple login</title>
    <script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
  </head>
  <body>
    <h1>Hello people !</h1>
    <form action="http://localhost:3000/login" method="POST">
    <input type="TEXT" id="user" size="40"><br>
    <input type="password" id="password" size="40"><br>
    <input type="submit" id="submit" value="Submit">
    </form>
  </body>
</html>`);
});
app.listen(3000,function(){
  console.log("Started on PORT 3000");
})