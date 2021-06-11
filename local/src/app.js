const express = require('express');
const Database = require('nedb');

const app = express();

db = {}
db.NhanVien = new Database('database/NhanVien.db')
db.CuaTiem = new Database('database/CuaTiem.db')

db.NhanVien.loadDatabase();
db.CuaTiem.loadDatabase();

//Insert data NhanVien
db.NhanVien.insert({MaNV: 'NV001', HoTen: 'Phan Thị Tuyết', GioiTinh: 'Nữ', NgayVL: '01/01/2015', BacHoc: 'Đại học'});
db.NhanVien.insert({MaNV: 'NV002', HoTen: 'Phạm Minh Hùng', GioiTinh: 'Nam', NgayVL: '01/04/2015', BacHoc: 'Cao Đẳng'});
db.NhanVien.insert({MaNV: 'NV003', HoTen: 'Phạm Hoành Trí', GioiTinh: 'Nam', NgayVL: '01/03/2015', BacHoc: 'Cao Đẳng'});
db.NhanVien.insert({MaNV: 'NV004', HoTen: 'Bùi Chính Bình', GioiTinh: 'Nam', NgayVL: '01/02/2015', BacHoc: 'Cao Đẳng'});
db.NhanVien.insert({MaNV: 'NV005', HoTen: 'Phan Quỳnh Giang', GioiTinh: 'Nữ', NgayVL: '01/03/2015', BacHoc: 'Cao Đẳng'});
db.NhanVien.insert({MaNV: 'NV006', HoTen: 'Nguyễn Thị Ngọc', GioiTinh: 'Nữ', NgayVL: '01/04/2015', BacHoc: 'Trung Cấp'});
db.NhanVien.insert({MaNV: 'NV007', HoTen: 'Ngụy Thanh Hằng', GioiTinh: 'Nữ', NgayVL: '01/05/2015', BacHoc: 'Trung Cấp'});
db.NhanVien.insert({MaNV: 'NV008', HoTen: 'Nguyễn Văn Đang', GioiTinh: 'Nữ', NgayVL: '01/06/2015', BacHoc: 'Trung Cấp'});
db.NhanVien.insert({MaNV: 'NV009', HoTen: 'Dỗ Anh Minh', GioiTinh: 'Nam', NgayVL: '01/10/2015', BacHoc: 'Phổ Thông'});
db.NhanVien.insert({MaNV: 'NV0010', HoTen: 'Đỗ Trung Quân', GioiTinh: 'Nam', NgayVL: '01/12/2015', BacHoc: 'Phổ Thông'});

//Insert data CuaTiem
db.CuaTiem.insert({MaNV: 'CH001', TenCuaHang: 'Nhạc cụ Thiện Thanh', DiaChi: 'Quận Binh Thạnh, TPHCM'});
db.CuaTiem.insert({MaNV: 'CH002', TenCuaHang: 'Nhạc cụ Thanh Hải', DiaChi: 'Quận Hải Châu, Đà Nẵng'});
db.CuaTiem.insert({MaNV: 'CH003', TenCuaHang: 'Nhạc cụ Thiên Kiều', DiaChi: 'Quận Ninh Kiều, Cần Thơ'});
db.CuaTiem.insert({MaNV: 'CH004', TenCuaHang: 'Nhạc cụ Thanh Lâm', DiaChi: 'Tp Đà Lạt, Lâm Đồng'});
 
app.get('/', function (req, res) {
  db.CuaTiem.find({}, (err, data) => {
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