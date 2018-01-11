var axios= require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=dc870d7f3413f917b00bf25fb69d38d4&units=imperial';

module.exports = {
  getTemp: function(location){
    var encodedLocation= encodeURIComponent(location);
      var requrl= `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

      return axios.get(requrl).then(function(res){

        if(res.data.cod && res.data.message)
        {
          throw new Error(res.data.message);
        }
        else{
          return res.data.main.temp;
        }
      },function(err){
        throw new Error(err.response.data.message);

        // throw new Error(res.data.message);
      });
  }
}
