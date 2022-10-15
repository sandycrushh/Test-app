const express =require('express');
const mongoose =require('mongoose');
var cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port ="3006";
const signupRouter = require('./Router/signupRouter');



  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: "true" }));
  

const url = 'mongodb://localhost:27017/myDb';

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection
con.on('open', function () {
    console.log("connect");
})


app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
  next();
});

 app.use('/user',signupRouter);
//   app.get('/',(req,res)=>{
//  res.send('Hello sandip.')
//   })

//server setup
app.listen(port, () => {
  console.log("Listening to port 3006");
});


module.exports = app;
//http://localhost:3006/user/signup