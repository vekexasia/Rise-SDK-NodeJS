module.exports = function(sendRequest){
  this.status = function(callback){
    sendRequest({
      url : '/loader/status',
      method : 'GET'
    }, callback);
  }

  this.syncStatus = function(callback){
    sendRequest({
      url : '/loader/status/sync',
      method : 'GET'
    }, callback);
  }

  return this;
}
