const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(express.static(path.join(__dirname, '../dist')));



//for developement
//app.use('/public', express.static(path.join(__dirname, '/public')))
app.get('*', (req, res) => {
    console.log("in get ");
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});




  



/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
// models.sequelize.sync().then(() => {

    server.listen(port, () => console.log(`API running on localhost:${port} `));

    
// });
