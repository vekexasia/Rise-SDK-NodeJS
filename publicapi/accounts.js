module.exports = function(sendRequest){

  this.open = function(secret, callback){
    sendRequest({
      url : '/accounts/open/',
      method : 'POST',
      body : {
        secret : secret
      }
    }, callback);
  }

  this.getBalance = function(address, callback){
    sendRequest({
      url : '/accounts/getBalance?address=' + address,
      method : 'GET'
    }, callback);
  }

  this.getPublicKey = function(address, callback){
    sendRequest({
      url : '/accounts/getPublicKey?address=' + address,
      method : 'GET'
    }, callback);
  }

  this.generatePublicKey = function(secret, callback){
    sendRequest({
      url : '/accounts/generatePublicKey',
      method : 'POST',
      body : {
        secret : secret
      }
    }, callback);
  }

  this.getAccount = function(address, callback){
    sendRequest({
      url : '/accounts?address=' + address,
      method : 'GET'
    }, callback);
  }

  this.getDelegates = function(address, callback){
    sendRequest({
      url : '/accounts/delegates?address=' + address,
      method : 'GET'
    }, callback);
  }

  this.putDelegates = function(secret, publicKey, delegates, secondSecret, callback){
    var options = {
      url : '/accounts/delegates',
      method : 'PUT',
      body : {
        secret : secret,
        publicKey : publicKey,
        delegates : delegates
      }
    }
    if(typeof secondSecret === 'function'){
      callback = secondSecret;
    } else {
      options.secondSecret = secondSecret;
    }
    sendRequest(options, callback);
  }

  return this;
}
