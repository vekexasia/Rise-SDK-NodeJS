String.prototype.addToQuery = function(name, param){
  var thisString = this.toString();
  if(thisString.length > 0){
    thisString += '&';
  }
  thisString += name + '=' + param;
  return thisString;
}

module.exports = function(sendRequest){
  this.get = function(id, callback){
    var options = {
      url : '/blocks/get?id=' + id,
      method : 'GET'
    }

    sendRequest(options, callback);
  }

  this.getList = function(param, callback){
      var query = '';
      if(param.totalFee){
        query = query.addToQuery('totalFee', param.totalFee)
      }
      if(param.totalAmount){
        query = query.addToQuery('totalAmount', param.totalAmount)
      }
      if(param.previousBlock){
        query = query.addToQuery('previousBlock', param.previousBlock)
      }
      if(param.height){
        query = query.addToQuery('height', param.height)
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
        url : '/blocks/getFee?' + query,
        method : 'GET'
      }, callback);
  }

  this.getFee = function(callback){
    var options = {
      url : '/blocks/getFee',
      method : 'GET'
    }

    sendRequest(options, callback);
  }

  this.getFeesSchedule = function(callback){
    var options = {
      url : '/blocks/getFees',
      method : 'GET'
    }

    sendRequest(options, callback);
  }

  this.getReward = function(callback){
    var options = {
      url : '/blocks/getReward',
      method : 'GET'
    }

    sendRequest(options, callback);
  }

  this.getSupply = function(callback){
    var options = {
      url : '/blocks/getSupply',
      method : 'GET'
    }

    sendRequest(options, callback);
  }

  this.getHeight = function(callback){
    var options = {
      url : '/blocks/getHeight',
      method : 'GET'
    }

    sendRequest(options, callback);
  }

  this.getStatus = function(callback){
    var options = {
      url : '/blocks/getStatus',
      method : 'GET'
    }

    sendRequest(options, callback);
  }

  this.getNethash = function(callback){
    var options = {
      url : '/blocks/getNethash',
      method : 'GET'
    }

    sendRequest(options, callback);
  }

  this.getMilestone = function(callback){
    var options = {
      url : '/blocks/getMilestone',
      method : 'GET'
    }

    sendRequest(options, callback);
  }

  return this;
}
