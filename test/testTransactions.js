var rise = require('../risesdk.js'),
    assert = require('assert'),
    senderAddress = '16313739661670634666R',
    recipientAddress = '8289732936686301816R';

rise.nodeAddress = 'localhost:4444';

rise.api.transactions.getList({
  senderId : senderAddress,
  recipientId : recipientAddress,
  limit : 10
},function(body){
  assert(body.success, JSON.stringify(body));
});
