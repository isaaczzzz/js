fs = require('fs');
path = require('path');

fs.readFile(path.join(__dirname, '/files/1.txt'), 'utf-8', function(err, dataStr) {
    if (err) {
        console.log('读取文件失败' + err.message);
    } else {
        console.log('读取文件成功: ' + dataStr);
    }
});

// fs.writeFile('./files/2.txt', 'aasd', function(err) {
//     console.log(err);
// })