const http = require('http')
 const PORT = 3000
const server = http.createServer((req,res)=>{
    console.log('Server Good!!')
res.setHeader( 'Content-type', 'application/json')


})
server.listen(PORT, 'Localhost',(error)=>{
    error ? console.log(error) : console.log('Server start on ${PORT}')
})