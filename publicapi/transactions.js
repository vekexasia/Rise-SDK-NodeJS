String.prototype.addToQuery = function(name, param){
  var thisString = this.toString();
  if(thisString.length > 0){
    thisString += '&';
  }
  thisString += name + '=' + param;
  return thisString;
}

module.exports = function(sendRequest){
  this.getList = function(param, callback){
    var query = '';
    if(param.blockId){
      query = query.addToQuery('blockId', param.blockId)
    }
    if(param.senderId){
      query = query.addToQuery('senderId', param.senderId)
    }
    if(param.recipientId){
      query = query.addToQuery('recipientId', param.recipientId)
    }
    if(param.limit){
      query = query.addToQuery('limit', param.limit)
    }
    if(param.offset){
      query = query.addToQuery('offset', param.offset)
    }
    if(param.orderBy){
      query = query.addToQuery('orderBy', param.orderBy)
    }

    sendRequest({
      url : '/transactions?' + query,
      method : 'GET'
    }, callback);
  }

  this.send = function(secret, amount, recipientId, publicKey, secondSecret, callback){
    var options = {
      url : '/transactions',
      method : 'PUT',
      body : {
        secret : secret,
        amount : amount,
        recipientId : recipientId,
        publicKey : publicKey
      }
    }
    if(typeof secondSecret === 'function'){
      callback = secondSecret;
    } else {
      options.secondSecret = secondSecret;
    }
    sendRequest(options, callback);
  }

  this.get = function(id, callback){
    var options = {
      url : '/transactions/get?id=' + id,
      method : 'GET'
    }

    sendRequest(options, callback);
  }

  this.getUnconfirmed = function(id, callback){
    var options = {
      url : '/transactions/unconfirmed/get?id=' + id,
      method : 'GET'
    }

    sendRequest(options, callback);
  }

  this.getUnconfirmedList = function(callback){
    var options = {
      url : '/transactions/unconfirmed',
      method : 'GET'
    }

    sendRequest(options, callback);
  }


  return this;
}
