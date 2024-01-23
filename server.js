  
  const http = require("http")

  const port = 5000
  const hostName = "localhost"

  const requestHandler = (req, res)=> {

if(req.url = "/"){ 

  res.write('my name is igbalaye kola')
  res.end()
}

  }

  const server = http.createServer(requestHandler)

  server.listen(port, hostName, ()=> {

console.log(`this server is runing at http://${hostName}:${port}`)

  })