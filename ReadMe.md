
Starting ZooKeeper
 - Go to the location where Kafa is downloaded
 - Run bin/zookeeper-server-start.sh config/zookeeper.properties
Starting Kafak-server
 - Go to the location where Kafa is downloaded
 - Run bin/kafka-server-start.sh config/server.properties
Topic creation
 - Topics are created programtically using "kafka-node" npm module
 -
List all topics
 - bin/kafka-topics.sh --list --zookeeper localhost:2181

Running the Application
 - Run npm install
 - Run nodemon index.js
