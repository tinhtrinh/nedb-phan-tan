const express = require('express');
const axios = require('axios');
const Database = require('nedb');

const app = express();

db = {}
db.NhanVien = new Database('database/NhanVien.db')
db.CuaTiem = new Database('database/CuaTiem.db')

db.NhanVien.loadDatabase();
db.CuaTiem.loadDatabase();

//Insert data NhanVien
db.NhanVien.insert({MaNV: 'NV001', HoTen: 'Phan Thị Tuyết', GioiTinh: 'Nữ', NgayVL: '01/01/2015', BacHoc: 'Đại học', MaCT: 'CH001'});
db.NhanVien.insert({MaNV: 'NV002', HoTen: 'Phạm Minh Hùng', GioiTinh: 'Nam', NgayVL: '01/04/2015', BacHoc: 'Cao Đẳng', MaCT: 'CH002'});
db.NhanVien.insert({MaNV: 'NV003', HoTen: 'Phạm Hoành Trí', GioiTinh: 'Nam', NgayVL: '01/03/2015', BacHoc: 'Cao Đẳng', MaCT: 'CH003'});
db.NhanVien.insert({MaNV: 'NV004', HoTen: 'Bùi Chính Bình', GioiTinh: 'Nam', NgayVL: '01/02/2015', BacHoc: 'Cao Đẳng', MaCT: 'CH004'});
db.NhanVien.insert({MaNV: 'NV005', HoTen: 'Phan Quỳnh Giang', GioiTinh: 'Nữ', NgayVL: '01/03/2015', BacHoc: 'Cao Đẳng', MaCT: 'CH001'});
db.NhanVien.insert({MaNV: 'NV006', HoTen: 'Nguyễn Thị Ngọc', GioiTinh: 'Nữ', NgayVL: '01/04/2015', BacHoc: 'Trung Cấp', MaCT: 'CH002'});
db.NhanVien.insert({MaNV: 'NV007', HoTen: 'Ngụy Thanh Hằng', GioiTinh: 'Nữ', NgayVL: '01/05/2015', BacHoc: 'Trung Cấp', MaCT: 'CH003'});
db.NhanVien.insert({MaNV: 'NV008', HoTen: 'Nguyễn Văn Đang', GioiTinh: 'Nữ', NgayVL: '01/06/2015', BacHoc: 'Trung Cấp', MaCT: 'CH004'});
db.NhanVien.insert({MaNV: 'NV009', HoTen: 'Dỗ Anh Minh', GioiTinh: 'Nam', NgayVL: '01/10/2015', BacHoc: 'Phổ Thông', MaCT: 'CH001'});
db.NhanVien.insert({MaNV: 'NV0010', HoTen: 'Đỗ Trung Quân', GioiTinh: 'Nam', NgayVL: '01/12/2015', BacHoc: 'Phổ Thông', MaCT: 'CH002'});

//Insert data CuaTiem
db.CuaTiem.insert({MaCT: 'CH001', TenCuaHang: 'Nhạc cụ Thiện Thanh', DiaChi: 'Quận Binh Thạnh, TPHCM'});
db.CuaTiem.insert({MaCT: 'CH002', TenCuaHang: 'Nhạc cụ Thanh Hải', DiaChi: 'Quận 9, TPHCM'});
db.CuaTiem.insert({MaCT: 'CH003', TenCuaHang: 'Nhạc cụ Thiên Kiều', DiaChi: 'Quận 12, TPHCM'});
db.CuaTiem.insert({MaCT: 'CH004', TenCuaHang: 'Nhạc cụ Thanh Lâm', DiaChi: 'Thành phố Thủ Đức, TPHCM'});
 
app.get('/', function (req, res) {
  db.CuaTiem.find({}, (err, data) => {
    if(err){
        res.end();
        return;
    }
    res.json(data);
});
});



app.post('/laynhanvien', (req, res) => {
    db.NhanVien.find({ MaNV: req.query.MaNV, MaCT: req.query.MaCT }, (err, data) => {
        if(err){
            res.end();
            return;
        }
        else if(data){
            res.json(data);
            db.NhanVien.remove({ _id: data[0]._id }, {multi: true}, (err, numRemoved) => {
                console.log('Delete ' + numRemoved + ' rows');

                //API THÊM
                app.post('/themnhanvien', (req, res) => {
                    const MaNV = req.query.MaNV, GioiTinh = req.query.GioiTinh, NgayVL = req.query.NgayVL, BacHoc = req.query.BacHoc, HoTen = req.query.HoTen, MaCT = req.query.MaCT;
                    console.log('REQ: ',MaNV, HoTen, GioiTinh, NgayVL, BacHoc, MaCT);

                    // Thêm nhân viên vào bên NhanVien2 ở đây
                    // db.NhanVien2.insert({MaNV: 'MaNV', HoTen: HoTen, GioiTinh: GioiTinh, NgayVL: NgayVL, BacHoc: BacHoc, MaCT: MaCT});
                })
            });
            
        }
    });

});

 
app.listen(5000, () => {
    console.log('listening at 5000')
});