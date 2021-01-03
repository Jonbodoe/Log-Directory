const express = require('express');
// const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get('/backend-handling/twitter-api', function (req, res){
    console.log('ehllo');
    
});


app.listen(process.env.PORT || 8080);