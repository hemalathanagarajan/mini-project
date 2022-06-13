let express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbconnection =require('./nanodb');
let app = express();
const port = 8000;
app.use(express.static('public'));




app.use(cors({
      origin:'http://localhost:4200'}

      ));
app.use(function(_req, res, next) {
    res.header("Access-Control-Allow-Origin', '*'");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-with,Content-type,Accept");
    next();
});

    
    
app.use(bodyParser.json());




app.get('/getdata/:id',(req,res)=>{
    console.log("email:",req.params.id);
    const object = {
        selector:{
            "email":req.params.id,
        }
    }
    dbconnection.finance.find(object).then((data)=>{
        res.send(data);
    },).catch((err=>{
        console.log("erro",err);
        res.status(400).send({
            message: err
        })
    }));

})

app.post('/postdata',function (req,res) {

    const objectnew= {
        name:req.body.Name,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        mobile:req.body.mobile,
        type:"user"

    }
    dbconnection.finance.insert(objectnew).then((data)=>{
        res.send(data)
    },).catch((function (err) {
        console.log("erro", err);
        res.status(400).send({
            message: err
        });
    }));
});

    
app.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err);
    }
  
    console.log(`server is listening on http://localhost:${port}`);
  });