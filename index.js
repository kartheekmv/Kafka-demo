const cors = require('cors');
var express = require('express');
var router = express.Router();
const kafka = require('kafka-node');
const producer = require('./producer/app');
const consumer = require('./consumer/app');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/producer',producer);
app.use('/consumer-service',consumer);

app.get('/',(req,res)=>{
  res.send("Success");
})


app.listen(5001,()=>{
  console.log("Kafka started ...")
})
