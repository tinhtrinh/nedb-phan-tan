const express = require('express');
const axios = require('axios');
//const Database = require('nedb');

const app = express();

axios.get('http://localhost:5000/')
  .then(response => {
    // console.log(response.data);
  })
  .catch(error => {
    console.log(error);
});

// Api lấy nhân viên có MaNV = 'NV007' và ở cửa tiệm có MaCT = 'CH003' và chuyển sang cửa tiệm có MaCT = 'HN005';
const MaNV = 'NV007';
const MaCT = 'CH003'
axios.post('http://localhost:5000/laynhanvien?MaNV=' + MaNV + '&MaCT=' + MaCT)
  .then(res => {
    //Thêm vào cửa tiệm khác
    if(res){
      console.log('NV: ', res.data);
            
    }
  })
  .catch(err => {
    console.log('Err: ', err);
  });


 
app.get('/', function (req, res) {
    res.send('global');
});
 
app.listen(3000, () => {
    console.log('listening at 3000')
});

