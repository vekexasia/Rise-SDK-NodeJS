String.prototype.addToQuery = function(name, param){
  var thisString = this.toString();
  if(thisString.length > 0){
    thisString += '&';
  }
  thisString += name + '=' + param;
  return thisString;
}

module.exports = function(sendRequest){
  this.enable = function(secret, secondSecret, username, callback){
    var options = {
      url : '/delegates',
      method : 'PUT',
      body : {
        secret : secret,
        secondSecret : secondSecret,
        username : username
      }
    }

    sendRequest(options, callback);
  }

  this.getList = function(options, callback){
    var query = '';
    if(param.limit){
      query = query.addToQuery('limit', param.limit)
    }
    if(param.offset){
      query = query.addToQuery('offset', param.offset)
    }
    if(param.orderBy){
      query = query.addToQuery('orderBy', param.orderBy)
    }

    var options = {
      url : '/delegates?' + query,
      method : 'PUT'
    }
    sendRequest(options, callback);
  }

  this.getByPublicKey = function(field, value, callback){
    var options = {
      url : '/delegates/get?publicKey=' + publicKey,
      method : 'GET'
    }

    sendRequest(options, callback);
  }

  this.getByUsername = function(field, value, callback){
    var options = {
      url : '/delegates/count?username=' + username,
      method : 'GET'
    }

    sendRequest(options, callback);
  }

  this.count = function(callback){
    var options = {
      url : '/delegates/count',
      method : 'GET'
    }

    sendRequest(options, callback);
  }

  this.getVoters = function(publicKey, callback){
    var options = {
      url : '/delegates/voters?publicKey=' + publicKey,
      method : 'GET'
    }

    sendRequest(options, callback);
  }

  this.enableForging = function(secret, callback){
    var options = {
      url : '/delegates/forging/enable',
      method : 'POST',
      body : {
        secret : secret
      }
    }

    sendRequest(options, callback);
  }

  this.disableForging = function(secret, callback){
    var options = {
      url : '/delegates/forging/disable',
      method : 'POST',
      body : {
        secret : secret
      }
    }

    sendRequest(options, callback);
  }

  this.getForgedByAccount = function(generatorPublicKey, callback){
    var options = {
      url : '/delegates/forging/getForgedByAccount?generatorPublicKey=' + generatorPublicKey,
      method : 'GET'
    }

    sendRequest(options, callback);
  }

  return this;
}
