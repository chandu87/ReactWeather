var React= require('react');
var WeatherForm=require('WeatherForm');
var WeatherMessage=require('WeatherMessage');
var openWeatherMap= require('OpenWeatherMap');

var Weather= React.createClass({
    getInitialState: function(){
    return({
        isLoading:false
      });
  },
  handleData: function(location){
    this.setState({
      isLoading:true
    });
 var that= this;
        openWeatherMap.getTemp(location).then(function(temp){
          that.setState({
            location:location,
            temp:temp,
            isLoading:false
          });
        },function(errorMessage){
          that.setState({
            isLoading:false
          });
            alert(errorMessage);
        });
  },

  render:function(){
    var {isLoading,location,temp}=this.state;
    function rendorMessage(){
      if(isLoading){

        return <h3 className="text-center">Fectching Weather . . . . </h3>;
      }
      else if(location && temp){
        return <WeatherMessage location={location} temp={temp}/>
      }
    }
    return(
      <div>
        <h3 className="text-center">Get Weather</h3>
        <WeatherForm sendData={this.handleData}/>
        {rendorMessage()}
      </div>
    );
  }
});

module.exports= Weather;
