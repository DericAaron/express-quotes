//global variable
let quotes = [{quote: 'An eye for an eye leaves the whole world blind',author: 'Ghandi'},
            {quote: "NoooOoOOOoOOOOo!", author: 'Darth Vader'}];

//pull in express module
const express = require('express');

//create our express instance
const app = express();

//set static path
app.use( express.static('server/public') );

//set port
const port = 5000;

//set listener for port
app.listen( port, () => {
  console.log('Listening in port', port);
  console.log(quotes);
});

//set
app.get('/quote', (req, res) => {
    console.log('handling request for /quote');
    res.send(quotes);
});
