const http = require('http');
const cookie = require('cookie');


http.createServer(function (req, res) {

    let cookies = {};
    if (req.headers.cookie) cookies = cookie.parse(req.headers.cookie);
    console.log(cookies);

    res.writeHead(200, {
        "Set-Cookie": [
            `yummy_cookie=choco`,
            `tasty_cookie=strawberry`,
            `Permanent_cookie=Permanent_cookie; Permanent:cookies; Max-Age=${60 * 60 * 24 * 30}`,
            `Secure=Secure; Secure`,
            `HttpOnly:HttpOnly; HttpOnly`,
            `Path=Path; Path=/cookie`,
            `Domain=Domain; Domain=o2.org`
        ]
    })

    res.end('Cookie!!');
}).listen(3000);