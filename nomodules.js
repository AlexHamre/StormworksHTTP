var http = require('http');
var fs = require('fs');
var value1 = "69"

http.createServer(function (req, res) {
    console.log(req.url)

    if (req.url.indexOf("/?storm") > -1){
        console.log(value1)
      res.write(value1)
      return res.end()
      console.log(value1)
    }
    else if (req.url.indexOf("/?val1") > -1){
      s = req.url.indexOf("=")
      value1 = req.url.slice(s+1)
      res.write(value1)
      return res.end()
    }
    else{
    fs.readFile('nomods.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
    }
    }).listen(3000);