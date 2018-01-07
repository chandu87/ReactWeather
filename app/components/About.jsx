var React= require('react');

var About= React.createClass({
  render:function(){
    return(
      <div>
        <h4>About Component</h4>
        <p>About weather app... it is written in javascript!!</p>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Other</li>
        </ul>

      </div>
    );
  }
});
module.exports=About;
