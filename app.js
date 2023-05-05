const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('Server Good')
res.setHeader( 'Content-type', 'application/json')
// res.write('<h1> FUCK U !!</h2>')
const data = JSON.stringify([
    {name: 'Billy', age: 69}
])

res.end(data)
})
server.listen(3000, 'Localhost',(error)=>{
    error ? console.log(error) : console.log('Server start on port 3000')
})