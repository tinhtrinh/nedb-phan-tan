const express = require('express');
const axios = require('axios');
//const Database = require('nedb');

const app = express();

axios.get('http://localhost:5000/')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
});
 
app.get('/', function (req, res) {
    res.send('global');
});
 
app.listen(3000, () => {
    console.log('listening at 3000')
});