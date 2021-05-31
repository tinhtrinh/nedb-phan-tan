const express = require('express');
const Database = require('nedb');

const app = express();

const database = new Database('database.db');
database.loadDatabase();
database.insert({name: 'tinhto', status: 'newbie'});
 
app.get('/', function (req, res) {
    database.find({}, (err, data) => {
        if(err){
            res.end();
            return;
        }
        res.json(data);
    });
});
 
app.listen(3000, () => {
    console.log('listening at 3000')
});