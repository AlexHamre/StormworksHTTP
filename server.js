var http = require('http');
var fs = require('fs');
var numbers = ["69","0"];
var bools = ["1","0"];

http.createServer(function (req, res) {
    console.log(req.url)

    if (req.url.indexOf("/?stormnum") > -1){
        res.write(numbers.toString())
        return res.end()
    }

    else if (req.url.indexOf("/?stormbool") > -1){
      res.write(bools.toString())
      return res.end()
  }

    else if (req.url.indexOf("/?val") > -1){
      s = req.url.indexOf("=")
      x = req.url.slice(5, s)
      numbers[x] = req.url.slice(s+1)
      res.write(numbers[x])
      return res.end()
    }
    else if (req.url.indexOf("/?bool") > -1){
      s = req.url.indexOf("=")
      x = req.url.slice(6, s)
      bools[x] = req.url.slice(s+1)
      res.write(bools[x])
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
    fs.readFile('controls.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
    }
    }).listen(80);