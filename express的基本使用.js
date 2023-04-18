//1.先引入express
const express = require('express');

//2.創建應用對象
const app = express();

//3.創建路由規則
//request是對請求報文的一個封裝
//response是對響應報文的一個封裝
app.get('/',(request,response)=>{
    //設置響應
    response.send('HELLO EXPRESS');

});

//4.監聽端口啓動服務
app.listen(8000,()=>{
    console.log('服務已經啓動,8000端口監聽中');
});

//完成上面的4個步驟之後，用node來啓動這個脚本，啓動這個端口
//右鍵，在集成終端打開（是目前這個文件，不要點錯了），然後輸入：node 本文件的名字，接著回車