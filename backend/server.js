const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbconnection =require('./nanodb');
const app = express();
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
        console.log("data fetch from db",data);
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
    console.log("data from angular",objectnew);
    dbconnection.finance.insert(objectnew).then((data)=>{
        console.log("data signed successfully ",data);
        res.send(data)
    },).catch((function (err) {
        console.log("erro", err);
        res.status(400).send({
            message: err
        });
    }));
});

    app.post('/budget',function (req)
    {
        var home = req.body.home;
        console.log(home);
        const budgetnew= {data:{
                        type:"budget",
                        Home:req.body.home,
                        Food:req.body.food,
                        Cloth:req.body.cloth,
                        Eb_bill:req.body.eb_bill,
                        Education:req.body.education,
                        EMI:req.body.EMI,
                        Entertainment:req.body.entertainment,
                        Transport:req.body.transport,
                        Health_checkup:req.body.health,
    
        }}
        console.log("data from angular",budgetnew);
    dbconnection.finance.insert(budgetnew).then((data)=>{
        console.log("data inserted successfully ",data);
           
    });
}
    
   
);
app.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err);
    }
  
    console.log(`server is listening on http://localhost:${port}`);
  });