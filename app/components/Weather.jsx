var React= require('react');
var WeatherForm=require('WeatherForm');
var WeatherMessage=require('WeatherMessage');
var ErrorModal=require('ErrorModal');
var openWeatherMap= require('OpenWeatherMap');

var Weather= React.createClass({

    getInitialState: function(){
    return({
        isLoading:false
      });
  },
  handleData: function(location){
      var that= this;
        this.setState({
          isLoading:true,
          errorMsg: undefined
          });

        openWeatherMap.getTemp(location).then(function(temp){
          that.setState({
            location:location,
            temp:temp,
            isLoading:false
          });
        },(e)=>{
                that.setState
                ({
                  isLoading:false,
                  errorMsg:e.message
                });

              }
      );
  },

  render:function(){
    var {isLoading,location,temp,errorMsg}=this.state;

    function rendorMessage(){
      if(isLoading){

        return <h3 className="text-center">Fectching Weather . . . . </h3>;
      }
      else if(location && temp){
        return <WeatherMessage location={location} temp={temp}/>
      }
    }
    function rendorError(){
      if(typeof errorMsg === 'string'){
        return(
          <ErrorModal message={errorMsg}/>
        )
      }
    }
    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm sendData={this.handleData}/>
        {rendorMessage()}
        {rendorError()}
      </div>
    );
  }
});

module.exports= Weather;
