
var React= require('react');
var {Link}=require('react-router');

var Nav = React.createClass({
  onSearch:function(e){
    e.preventDefault();
    var location= this.refs.navsearch.value;
    var encodedLocation=encodeURIComponent(location);

    if(location.length>0){
      this.refs.navsearch='';
      window.location.hash='#/?location='+encodedLocation;
    }
  },
  render:function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/examples">Examples</Link></li>

          </ul>

        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li>
                  <input type="search" ref="navsearch" placeholder="Search weather by city"/>
                </li>
                <li>
                  <input type="submit" className="button" value="Get Weather"/>
                </li>

              </ul>
          </form>
        </div>



     </div>
    );
  }
});

module.exports=Nav;
