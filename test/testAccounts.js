var rise = require('../risesdk.js'),
    assert = require('assert'),
    secret = 'wagon stock borrow episode laundry kitten salute link globe zero feed marble',
    address = '16313739661670634666R',
    publicKey = 'c094ebee7ec0c50ebee32918655e089f6e1a604b83bcaa760293c61e0f18ab6f';

rise.nodeAddress = 'localhost:4444';

rise.api.accounts.open(secret, function(body){
  assert(body.success, JSON.stringify(body));
});

rise.api.accounts.getBalance(address, function(body){
  assert(body.success, JSON.stringify(body));
});

rise.api.accounts.getPublicKey(address, function(body){
  assert(body.success, JSON.stringify(body));
});

rise.api.accounts.generatePublicKey(secret, function(body){
  assert(body.success, JSON.stringify(body));
});

rise.api.accounts.getAccount(address, function(body){
  assert(body.success, JSON.stringify(body));
});

rise.api.accounts.getDelegates(address, function(body){
  assert(body.success, JSON.stringify(body));
});
