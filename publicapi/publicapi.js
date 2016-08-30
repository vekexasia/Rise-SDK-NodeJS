var accounts = require('./accounts.js');
var loader = require('./loader.js');
var transactions = require('./transactions.js');
var peers = require('./peers.js');
var request = require('request');
var blocks = require('./blocks.js');
var signatures = require('./signatures.js');
var delegates = require('./delegates.js');
var multiSignatures = require('./multiSignatures.js');


var sendRequest = function(options, callback){
  var baseRequest = request.defaults({
    baseUrl : 'http://' + module.parent.exports.nodeAddress + '/api/',
    json : true
  });
  baseRequest(options, function(err, response, body){
    if(err){
      console.log(err);
    }
    callback(body);
  });
}

module.exports = {
  accounts : accounts(sendRequest),
  loader : loader(sendRequest),
  transactions : transactions(sendRequest),
  peers : peers(sendRequest),
  blocks : blocks(sendRequest),
  signatures : signatures(sendRequest),
  delegates : delegates(sendRequest),
  multiSignatures multiSignatures(sendRequest)
}
