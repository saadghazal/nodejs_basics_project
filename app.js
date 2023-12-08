const http = require('http')

// it requires to accept requestListener and it's a function that will execute for every incoming request
const server = http.createServer((req,res)=>{
    let url = req.url
    if(url === '/'){
        res.setHeader('Content-Type','text/html')
        res.write("<html>")
        res.write('<head><title>My First Page</title></head>')
        res.write(`<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`)
        res.write("</html>")
        return res.end()
    }
    let name = "Ghazal"
    res.setHeader('Content-Type','text/html')
    res.write("<html>")
    res.write('<head><title>My First Page</title></head>')
    res.write(`<body><h1>Hello From Node Js with ${name}</h1></body>`)
    res.write("</html>")
    res.end()
})

server.listen(3000)