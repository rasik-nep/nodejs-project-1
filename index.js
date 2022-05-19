const http  = require('http');
const express = require ('express')
const app = express();
const fs = require('fs')
const path = require ('path')

const port = process.env.PORT || 8080;

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        fs.readFile('index.html',function(err,data){
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end;
        });
    } else if (req.url === '/contact-me'){
        fs.readFile('contact-me.html',function(err,data){
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end;
        });
    } else if (req.url === '/about'){
        fs.readFile('about.html',(err,data)=>{
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end;
        })
    } else {
        fs.readFile('404.html',(err,data)=>{
            if (err) throw err;
            res.writeHead(400,{'Content-Type':'text/html'});
            res.write(data);
            return res.end;
        })
    }
})


server.listen(port,()=>{
    console.log(`server running at port ${port}`)
})