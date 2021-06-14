const express = require('express');
const axios = require('axios');
const http = require('http');
//const Database = require('nedb');

const app = express();
let data;

axios.get('http://localhost:5000/')
  .then(response => {
    // console.log(response.data);
  })
  .catch(error => {
    console.log(error);
});

// Api lấy nhân viên có MaNV = 'NV007' và ở cửa tiệm có MaCT = 'CH003' và chuyển sang cửa tiệm có MaCT = 'HN005';
const MaNV = 'NV007';
const MaCT = 'CH003';
const MaCT2 = 'HN005'; //Tên cửa tiệm chuyển đổi.
axios.post('http://localhost:5000/laynhanvien?MaNV=' + MaNV + '&MaCT=' + MaCT)
  .then(res => {
    if(res){
      console.log('NV: ', res.data);
      data = res.data;
    }
  })
  .catch(err => {
    console.log('Err: ', err);
  });


setTimeout(() => {
  if(data) {
    const MaNV = data[0].MaNV, GioiTinh = data[0].GioiTinh, NgayVL = data[0].NgayVL, BacHoc = data[0].BacHoc, HoTen = data[0].HoTen;
    const encodedURI = encodeURI('http://localhost:5000/themnhanvien?MaNV='+MaNV+'&HoTen='+HoTen+'&GioiTinh='+GioiTinh+'&NgayVL='+NgayVL+'&BacHoc='+BacHoc+'&MaCT='+MaCT2);
    axios.post(encodedURI)
      .then(res => {

    })
    .catch(err => {
      console.log('Err: ', err);
    })
  }
}, 5000);

 
app.get('/', function (req, res) {
  res.send('global');
  res.write('HIs');
});
 
app.listen(3000, () => {
    console.log('listening at 3000')
});

