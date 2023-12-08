const http = require('http')

// it requires to accept requestListener and it's a function that will execute for every incoming request
const server = http.createServer((req,res)=>{
    console.log(req)
})

server.listen(3000)