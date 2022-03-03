var express = require('express');
var app = express();

var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();


//Use alternate localhost and the port Heroku assigns to $PORT
const host = '0.0.0.0';
const port = process.env.PORT || 5000;


var request = new XMLHttpRequest();  
request.open('GET', 'https://service-smartbelt.herokuapp.com/', true);
request.onreadystatechange = function(){
    if (request.readyState === 4){
        if (request.status === 404) {  
            alert("EL servidor service-smartbelt está APAGADO...");
        }  else {
            app.get('/', function (req, res) {
                res.send('EL servidor service-smartbelt está FUNCIONANDO...');
             })
        }
    }
};

request.send();
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})