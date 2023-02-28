// 引入内置的http模块
let http = require('http')

let result = {
    code: 200,
    list: [{
        msg: '好好学习',
        name: '蒙牛牛奶',
        price: 3,
        address: '河南郑州',
        key:1,
    }, {
        msg: '啦啦啦啦',
        name: '伊利牛奶',
        price: 21,
        address: '浙江温州',
        key:2,
    },{
        msg: '内蒙古大草原',
        name: '纯甄牛奶',
        price: 11,
        address: '内蒙古',
        key:3,
    }]
}
// 调用http模块的createServer方法，创建服务器对象
let app = http.createServer((require, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    });
    // 通过response对象给客户端响应
    response.end(JSON.stringify(result))
})

// 3.调用服务器对象的listen方法 开启某个端口
app.listen(3008, err => {
    if (!err) {
        console.log('成功')
    }
})