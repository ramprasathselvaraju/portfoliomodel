const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')




const stock_creation_api = require('./api/stock_creation_api')


const object_api = require('./api/object_api')


var cors = require('cors')
const middleware = require('./middleware')

// const port = process.env.PORT || 5008
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())


app.get('/stock_creation_api_list',stock_creation_api.listProducts)
app.get('/stock_creation_api/:id', stock_creation_api.getuserbyid)
app.post('/stock_creation_api',  stock_creation_api.createProduct)
app.put('/stock_creation_api/:id', stock_creation_api.editProduct)
app.delete('/stock_creation_api/:id',  stock_creation_api.deleteProduct)

app.get('/object_api_list',object_api.listProducts)
app.post('/object_api',  object_api.createProduct)


app.use(middleware.handleValidationError)
app.use(middleware.handleError)
app.use(middleware.notFound)

// var https_options = {

//   key: fs.readFileSync('./key/backend.cloudjiffy.net.key'),

//   cert: fs.readFileSync("./key/backend.cloudjiffy.net.cer"),

//   ca: [fs.readFileSync('./key/fullchain.cer'),]
// };


// https.createServer(https_options, app).listen(5008);

const server = app.listen(5008, () =>
  console.log(`Server listening on port ${5008}`)
)

if (require.main !== module) {
  module.exports = server
}


//  setInterval(function(){
//  order_management_try.process()
//  order_management_subscribe.process()
//  }, 1000);      