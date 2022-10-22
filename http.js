const http = require('http');

// 创建服务器实例
const server = http.createServer();

//绑定request事件，监听客户端请求
server.on('request', (req, res) => {
    const url = req.url;
    const method = req.method;
    console.log(`url is ${url}, method is ${method}`);

    //response内容
    const str = `your url is ${url}, method is ${method}`;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(str);
});

server.listen(8080, () => {
    console.log('server running...')
});