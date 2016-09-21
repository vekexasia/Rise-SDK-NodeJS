module.exports = function(sendRequest){
  this.getPending = function(publicKey, callback){
    var options = {
      url : '/multisignatures/pending?publicKey=' + publicKey,
      method : 'GET'
    }

    sendRequest(options, callback);
  }

  this.create = function(secret, lifetime, min, keysGroup, callback){
    var options = {
      url : '/multisignatures',
      method : 'PUT',
      body : {
        secret : secret,
        lifetime : lifetime, // Integer to represent hours.
        min : min, // Minimum signatures need to approve
        keysgroup : keysGroup // Array of public keys.
      }
    }

    sendRequest(options, callback);
  }

  this.sign = function(secret, publicKey, transactionId, callback){
    var options = {
      url : '/multisignatures/sign' + publicKey,
      method : 'POST',
      body : {
        secret : secret,
        publicKey : publicKey,
        transactionId : transactionId
      }
    }

    sendRequest(options, callback);
  }

  this.getAccounts = function(publicKey, callback){
    var options = {
      url : '/multisignatures/accounts?publicKey' + publicKey,
      method : 'GET'
    }

    sendRequest(options, callback);
  }

  return this;
}
