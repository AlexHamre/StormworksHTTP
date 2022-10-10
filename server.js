var http = require('http');
var fs = require('fs');
var values = []

http.createServer(function (req, res) {
    console.log(req.url)

    if (req.url.indexOf("&timeout") > -1){
      s = req.url.indexOf("&")
      x = req.url.slice(7,s)
        console.log(values[x])
      res.write(values[x])
      return res.end()
    }

    if (req.url.indexOf("/?storm") > -1){
      x = req.url.slice(7)
      console.log(values[x])
      if (values[x] == undefined){
        values[x] = "69"
      }
      res.write(values[x])
      return res.end()
    }
    else if (req.url.indexOf("/?val") > -1){
      s = req.url.indexOf("=")
      x = req.url.slice(5, s)
      values[x] = req.url.slice(s+1)
      res.write(values[x])
      return res.end()
    }
    else if (req.url == "/style.css") {
      fs.readFile('style.css', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'}); 
        res.write(data); return res.end(); 
      });
    }
    else if (req.url == "/sliders.js") { 
    fs.readFile('sliders.js', function(err, data) { 
      res.writeHead(200, {'Content-Type': 'text/html'}); 
      res.write(data); return res.end(); }); 
    }
    else{
    fs.readFile('newer_controls.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
    }
    }).listen(3000);