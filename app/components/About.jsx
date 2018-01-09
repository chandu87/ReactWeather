var React= require('react');

var About= (props)=> {
    return(
      <div>
        <h1 className="text-center">About</h1>
        <p>Application for searching weather in your city.
          This application developed as part of learning
          Web development with React javascript.</p>
          <p>The tools used in this project are listed below</p>
        <ul>
          <li><a href="https://reactjs.org/">React JS </a>
          - A Javascript library for building interfaces</li>
          <li><a href="http://openweathermap.org/">OpenWeatherMap </a>
          - It is an opensource api for weather data resource.
          Simple and clear API, Current conditions and weather
          forecast for morethan 200000 cities.
        </li>
        </ul>

      </div>
    )
  };

module.exports=About;
