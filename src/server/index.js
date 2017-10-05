const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config({path: './.env'})
const controller = require('./controller');

const app = express();
app.use( bodyParser.json() );
app.use( cors() );
massive( process.env.CONNECTION_STRING ).then( dbInstance => {
  app.set('db', dbInstance)
});

app.get( '/api/shelfie', controller.get_shelfie );

const port = process.env.PORT || 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
