var rise = require('../risesdk.js'),
    assert = require('assert');

rise.nodeAddress = 'localhost:4444';

rise.api.loader.status(function(body){
  assert(body.success, JSON.stringify(body));
});

rise.api.loader.syncStatus(function(body){
  assert(body.success, JSON.stringify(body));
});
