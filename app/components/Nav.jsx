
var React= require('react');
var {Link}=require('react-router');

var Nav = React.createClass({
  render:function(){
    return(
      // <h2>adkasldjla</h2>
      <div>
        <Link to="/"> Home</Link>
        <Link to="/about">About</Link>
        <Link to="/examples">Examples</Link>

    </div>
    );
  }
});

module.exports=Nav;
