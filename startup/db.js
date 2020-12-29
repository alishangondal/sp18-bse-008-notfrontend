const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {

  mongoose.connect(`mongodb://ali_1:Ali_786@cluster0-shard-00-00.qgq6l.mongodb.net:27017,cluster0-shard-00-01.qgq6l.mongodb.net:27017,cluster0-shard-00-02.qgq6l.mongodb.net:27017/AliShan?ssl=true&replicaSet=atlas-o13tr6-shard-0&authSource=admin&retryWrites=true&w=majority`, {useNewUrlParser: true})
    .then(() => winston.info(`Connected to ...`));
}