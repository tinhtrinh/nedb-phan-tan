const express = require('express');
const Database = require('nedb');

const app = express();

db = {}
db.NhanVien = new Database('database/NhanVien.db')
db.CuaTiem = new Database('database/CuaTiem.db')

db.NhanVien.loadDatabase();
db.CuaTiem.loadDatabase();

db.NhanVien.insert({MaNV: 'NV002', HoTen: 'Phạm Minh Hùng', GioiTinh: 'Nam', NgayVL: '01/04/2015', BacHoc: 'Cao Đẳng', MaCT: 'CH002'});
db.NhanVien.insert({MaNV: 'NV006', HoTen: 'Nguyễn Thị Ngọc', GioiTinh: 'Nữ', NgayVL: '01/04/2015', BacHoc: 'Trung Cấp', MaCT: 'CH002'});
db.NhanVien.insert({MaNV: 'NV0010', HoTen: 'Đỗ Trung Quân', GioiTinh: 'Nam', NgayVL: '01/12/2015', BacHoc: 'Phổ Thông', MaCT: 'CH002'});

//Insert data CuaTiem
db.CuaTiem.insert({MaCT: 'CH001', TenCuaHang: 'Nhạc cụ Thiện Thanh', DiaChi: 'Quận Binh Thạnh, TPHCM'});
db.CuaTiem.insert({MaCT: 'CH002', TenCuaHang: 'Nhạc cụ Thanh Hải', DiaChi: 'Quận 9, TPHCM'});
db.CuaTiem.insert({MaCT: 'CH003', TenCuaHang: 'Nhạc cụ Thiên Kiều', DiaChi: 'Quận 12, TPHCM'});
db.CuaTiem.insert({MaCT: 'CH004', TenCuaHang: 'Nhạc cụ Thanh Lâm', DiaChi: 'Thành phố Thủ Đức, TPHCM'});

app.listen(7000, () => {
    console.log('listening at 7000')
});