
const express = require('express');
const router = express.Router();

const kafka = require('kafka-node');
const HighLevelProducer = kafka.HighLevelProducer;
const client = new kafka.Client();
const producer = new HighLevelProducer(client);

router.get('/',(req,res)=>{
  res.send("c")
})

/**
 * Create a topic
 * req.body.topics :{
                      "topics": [ "demo" , "topic"]
                    }
 */
router.post('/topic',(req,res)=>{
  producer.createTopics(req.body.topics,true,(err,data)=>{
    if(err){
      res.send({"error occured":err});
    }else{
      res.send({"Success":data})
    }
  });
});

/**
 *
 */
router.post('/send-message',(req,res)=>{

  // console.log('req.body.payloads outside: ',req.body.payloads,);
  //   producer.on('ready',()=>{
  //     console.log('req.body.payloads in ready: ',req.body.payloads);
  //     producer.send(req.body.payloads,(err,data)=>{

  //     console.log('req.body.payloads,: ',req.body.payloads);
  //       if(err){
  //         res.send({"error occured":err});
  //       }else{
  //         res.send({"Success":data})
  //       }
  //     })
  //   })
  //   producer.on('error', function (err) {
  //     console.log('Producer is in error state: ',err);
  //     res.send(err);
  // })


  producer.send(req.body.payloads,(err,data)=>{

    // console.log('req.body.payloads,: ',req.body.payloads);
      if(err){
        res.send({"error occured":err});
      }else{
        res.send({"Success":data})
      }
    })
})


module.exports = router;
