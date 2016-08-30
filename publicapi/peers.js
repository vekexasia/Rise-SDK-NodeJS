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
    if(param.state){
      query = query.addToQuery('state', param.state)
    }
    if(param.os){
      query = query.addToQuery('os', param.os)
    }
    if(param.version){
      query = query.addToQuery('version', param.version)
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
      url : '/peers?' + query,
      method : 'GET'
    }, callback);
  }

  this.get = function(ip, port, callback){
    var options = {
      url : '/peers/get?ip=' + ip +'&port=' + port,
      method : 'GET'
    }

    sendRequest(options, callback);
  }

  this.version = function(callback){
    var options = {
      url : '/peers/version',
      method : 'GET'
    }

    sendRequest(options, callback);
  }

  return this;
}
