import React from "react";
class Weather extends React.Component {
  render() {
    return (
      <div>
        {<p>{this.props.weatherState.description} </p>}
        {<p>{this.props.weatherState.date}</p>}
      </div>
    );
  }
}
export default Weather;
