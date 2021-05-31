const express = require('express');
const axios = require('axios');

const app = express();

axios.get('http://localhost:3000/')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
 
app.get('/', function (req, res) {
    res.send('Local');
});
 
app.listen(5000, () => {
    console.log('listening at 5000')
});