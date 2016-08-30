module.exports = function(sendRequest){
  this.get = function(id, callback){
    var options = {
      url : '/signatures/get?id=' + id,
      method : 'GET'
    }

    sendRequest(options, callback);
  }

  this.add = function(secret, secondSecret, publicKey, callback){ // TODO testing. Lisk has secondsecret documented as a both all lower and camelcase.
    var options = {
      url : '/signatures',
      method : 'PUT',
      body {
        secret : secret,
        secondSecret : secondSecret,
        publicKey : publicKey
      }
    }

    sendRequest(options, callback);
  }

  return this;
}
