const http = require('http')
const routes = require('./routes')

// it requires to accept requestListener and it's a function that will execute for every incoming request
const server = http.createServer((req,res)=>{
    routes(req,res)
})

server.listen(3000)