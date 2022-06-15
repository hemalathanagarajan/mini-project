let express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dbconnection = require('./nanodb')
let app1 = express()
app1.disable('x-powered-by')

let helmet = require('helmet')
let app2 = express()
app2.use(helmet.hidePoweredBy())
const port = 8000
app1.use(express.static('public'))

app1.use(
  cors({
    origin: 'http://localhost:4200',
  }),
)
app1.use(function (_req, res, next) {
  res.header("Access-Control-Allow-Origin', '*'")
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-with,Content-type,Accept',
  )
  next()
})

app1.use(bodyParser.json())

app1.get('/getdata/:id', (req, res) => {
  console.log('email:', req.params.id)
  const object = {
    selector: {
      email: req.params.id,
    },
  }
  dbconnection.finance
    .find(object)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log('erro', err)
      res.status(400).send({
        message: err,
      })
    })
})

app1.post('/postdata', function (req, res) {
  const objectnew = {
    name: req.body.Name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    mobile: req.body.mobile,
    type: 'user',
  }
  dbconnection.finance
    .insert(objectnew)
    .then((data) => {
      res.send(data)
    })
    .catch(function (err) {
      console.log('erro', err)
      res.status(400).send({
        message: err,
      })
    })
})

app1.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on http://localhost:${port}`)
})
