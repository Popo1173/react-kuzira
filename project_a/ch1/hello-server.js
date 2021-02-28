const http = require('http')

//WWebサーバー実行
const svr = http.createServer(handler) //サーバを生成
svr.listen(8081) // ポート8081

function handler (req, res) {
    console.log('url', req.url)
    console.log('method', req.method)

    //HTTPヘッダ出力
    res.writeHead(200, {'content-Type': 'text/html'})
    //レスポンス本体を出力
    res.end('<h1>Hello, World</h1>\n')
}