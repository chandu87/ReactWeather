var React= require('react');

var WeatherForm= React.createClass({
  onFormSubmit : function(e){
    e.preventDefault();

    var location= this.refs.location.value;

     if(typeof location== 'string')
     {
       this.refs.location.value='';
       this.props.sendData(location);
     }
  },
  render:function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location"></input>
          <button>Get Weather</button>
        </form>
      </div>

    );

  }
});

module.exports=WeatherForm;
