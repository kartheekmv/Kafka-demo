
const express = require('express');
const router = express.Router();

var kafka = require('kafka-node');
var Consumer = kafka.Consumer;
var client = new kafka.Client();
var consumer = new Consumer(
        client,
        [
            { topic: 'demo',offset: 0 }, { topic: 'topic',offset: 0 } ,{ topic:"new-demo-today", offset:0}
        ],
        {
            autoCommit: false
        }
    );
// router.get('/',(req,res)=>{
//   consumer.on('message', function (message) {
//     console.log(message);
// });

// consumer.on('error', function (err) {
//     console.log('Error:',err);
// })

// consumer.on('offsetOutOfRange', function (err) {
//     console.log('offsetOutOfRange:',err);
// })
// })

var consumer_data=[];

consumer.on('message', function (message) {
  console.log( message);
  consumer_data.push(message) ;
});

consumer.on('error', function (err) {
  console.log('Error:',err);
})

consumer.on('offsetOutOfRange', function (err) {
  console.log('offsetOutOfRange:',err);
})


router.get('/consumer-data',(req,res)=>{
    if(consumer_data){
      res.json(consumer_data);
    }else{
      res.send(404,"No data received");
    }
});
module.exports = router;
