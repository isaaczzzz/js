const express = require('express');

const app = express();

//响应GET, POST请求
app.get('/user', (req, res) => {
    res.send({name: 'zhangsan', age: 20, gender: 'male'});
})

app.post('/user', (req, res) => {
    res.send('请求成功');
})

app.get('/', (req, res) => {
    //获取url中的查询参数
    console.log(req.query);
    res.send(req.query);
})

//获取动态参数
//localhost/user/1/zs
app.get('/user/:id/:name', (req, res) => {
    res.send(req.params);
})

app.listen(80, () => {
    console.log('express server running');
})