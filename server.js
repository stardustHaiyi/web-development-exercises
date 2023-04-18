// 1.引入express框架
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server',(request,response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头的名字叫：Access-Control-Allow-Origin


    // 设置响应
    response.send('Hello Express');
});

// 4.监听端口服务启动
app.listen(8000,()=>{
    console.log("服务已启动，8000端口监听中...")
});

// 在原生AJAX文件夹上面 右键 在集成终端中打开 输入node server.js 回车

// ctrl+c 关闭服务端口