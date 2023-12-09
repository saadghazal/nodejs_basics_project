const http = require('http')
const fs = require("fs")

// it requires to accept requestListener and it's a function that will execute for every incoming request
const server = http.createServer((req,res)=>{
    let url = req.url
    let method = req.method
    if(url === '/'){
        res.setHeader('Content-Type','text/html')
        res.write("<html>")
        res.write('<head><title>My First Page</title></head>')
        res.write(`<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`)
        res.write("</html>")
        return res.end()
    }
    if(url === "/message" && method === "POST"){ 
        const body = [];
        // getting user data in chunks with buffers concept.

        // Node JS : when it first encounter this line it will simple add a new event listener internally
        req.on('data',(chunk)=>{
            // Note --> We Can't work with the chunk itself
            console.log("Chunk:",chunk)
            body.push(chunk)
        }); // on method allows us to listen to certain events and here i'm listening to the data event.
        /* 
        ****** Data Event: ******
        The data event will be fired whenever a new chunk is ready to be read.
        */
       return req.on('end',()=>{
        // in this function we can rely on all the chunks being read in.
        const parsedBody = Buffer.concat(body).toString()
        const message = parsedBody.split('=')[1]
        fs.writeFileSync("message.txt",message)
        res.statusCode = 302 //redirection
        res.setHeader('Location','/')
        return res.end();
       })
       /*
        ****** End Event: ******
        This end event will be fired once it's done parsing the incoming requests data
        or the incoming requests in general.
       */
        
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