//require('dotenv').config()
var Twit = require('twit');
var config= require('./config');
var T=new Twit(config);
var K =new Twit(config);

/*
//loadjson variables
var country = loadJSON.country;
var city = loadJSON.city;
*/

var params = {
   q:'Trump',
   count: 5
};

var myparams = {
	id: 2391279 // denver example
};

exports.getTwitterDataByWoeID = function (woeid) {

console.log('Hi there!');

var paramsDeezNutz = {
  id: woeid
};

var ret = undefined;

T.get('trends/place',paramsDeezNutz)
  .catch(function (err) {
    console.log('Could not fetch Trends By WoeID', err.stack)
  })
  .then(function (result) {
    ret = result;
});

return ret;

};

/*
T.get('trends/place',myparams)
  .catch(function (err) {
    console.log('caught error', err.stack)
  })
  .then(function (result) {
    //console.log('data', result.data);
})

T.get('search/tweets',params,gotData);
//T.get('search/tweets', { q: 'UF', count: 5 }, function(err, data, response);
function gotData(err,data,response){
  var tweets=data.statuses;

  var sortable = tweets.slice(0);
  sortable.sort(function(a,b){
  return(a.retweet_count-b.retweet_count);
  });
  for(var i =0;i<tweets.length;i++){
    //console.log(data);
    console.log(sortable[i].text);
    //console.log(tweets[i].retweet_count)
    console.log(sortable[i].retweet_count);
  }
  

}*/
