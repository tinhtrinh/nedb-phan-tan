const express = require('express');
const axios = require('axios');
const Database = require('nedb');
const { json } = require('express');

const app = express();

db = {};
db.CuaTiem = new Database('database/CuaTiem.db');

db.CuaTiem.loadDatabase();

// Insert data CuaTiem
// db.CuaTiem.insert({MaCT: 'CH001', TenCuaHang: 'Nhạc cụ Thiện Thanh', DiaChi: 'Quận Binh Thạnh, TPHCM'});
// db.CuaTiem.insert({MaCT: 'CH002', TenCuaHang: 'Nhạc cụ Thanh Hải', DiaChi: 'Quận 9, TPHCM'});
// db.CuaTiem.insert({MaCT: 'CH003', TenCuaHang: 'Nhạc cụ Thiên Kiều', DiaChi: 'Quận 12, TPHCM'});
// db.CuaTiem.insert({MaCT: 'CH004', TenCuaHang: 'Nhạc cụ Thanh Lâm', DiaChi: 'Thành phố Thủ Đức, TPHCM'});

async function chuyennhanvien() {
  const MaNV = 'NV0010';
  let res = await axios.post('http://localhost:5000/laynhanvien?MaNV=' + MaNV);
  let req = await axios.post('http://localhost:7000/themnhanvien', res.data[0]);
}
 
chuyennhanvien();

app.listen(3000, () => {
    console.log('listening at 3000')
});