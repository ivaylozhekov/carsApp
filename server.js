var express = require('express')
var path = require('path')
var compression = require('compression')

var app = express()
app.use(compression());

app.use(express.static(path.join(__dirname, 'app/build')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/app/build/index.html'))
})

app.listen(8888, function() {
    console.log('Express server running at localhost:8888')
})