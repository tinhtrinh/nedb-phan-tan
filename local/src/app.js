const express = require('express');
const Database = require('nedb');

const app = express();

db = {}
db.khoa = new Database('database/khoa.db')
db.sinhvien = new Database('database/sinhvien.db')
db.hocphi = new Database('database/hocphi.db')

db.khoa.loadDatabase();
db.sinhvien.loadDatabase();
db.hocphi.loadDatabase();

db.khoa.insert({makhoa: 'HTTT_CNTT', matruong: 'CNTT'});
db.sinhvien.insert({masv: '06520224', makhoa: 'HTTT_CNTT', hoten: 'Cao Dang Khoa', ngaysinh: '05/08/1988', gioitinh: 1});
db.hocphi.insert({masv: '06520224', hocky: 1, sotien: 1260000});
 
app.get('/', function (req, res) {
  db.sinhvien.find({}, (err, data) => {
    if(err){
        res.end();
        return;
    }
    res.json(data);
});
});
 
app.listen(5000, () => {
    console.log('listening at 5000')
});