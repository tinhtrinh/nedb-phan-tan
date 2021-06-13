const express = require('express');
const bodyParser = require('body-parser');
const Database = require('nedb');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

db = {}
db.NhanVien = new Database('database/NhanVien.db')
db.CuaTiem = new Database('database/CuaTiem.db')

db.NhanVien.loadDatabase();
db.CuaTiem.loadDatabase();

// db.NhanVien.insert({MaNV: 'NV002', HoTen: 'Phạm Minh Hùng', GioiTinh: 'Nam', NgayVL: '01/04/2015', BacHoc: 'Cao Đẳng', MaCT: 'CH002'});
// db.NhanVien.insert({MaNV: 'NV006', HoTen: 'Nguyễn Thị Ngọc', GioiTinh: 'Nữ', NgayVL: '01/04/2015', BacHoc: 'Trung Cấp', MaCT: 'CH002'});

//Insert data CuaTiem
// db.CuaTiem.insert({MaCT: 'CH001', TenCuaHang: 'Nhạc cụ Thiện Thanh', DiaChi: 'Quận Binh Thạnh, TPHCM'});
// db.CuaTiem.insert({MaCT: 'CH002', TenCuaHang: 'Nhạc cụ Thanh Hải', DiaChi: 'Quận 9, TPHCM'});
// db.CuaTiem.insert({MaCT: 'CH003', TenCuaHang: 'Nhạc cụ Thiên Kiều', DiaChi: 'Quận 12, TPHCM'});
// db.CuaTiem.insert({MaCT: 'CH004', TenCuaHang: 'Nhạc cụ Thanh Lâm', DiaChi: 'Thành phố Thủ Đức, TPHCM'});

app.post('/themnhanvien', (req, res) => {
    if(req.body){
        let {MaNV, HoTen, GioiTinh, NgayVL, BacHoc, MaCT} = req.body;
        db.NhanVien.insert({MaNV: MaNV, HoTen: HoTen, GioiTinh: GioiTinh, NgayVL: NgayVL, BacHoc: BacHoc, MaCT: MaCT});
        console.log("Insert 1 row")
    }
})

app.listen(7000, () => {
    console.log('listening at 7000')
});