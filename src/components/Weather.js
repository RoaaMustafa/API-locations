import React from 'react';
import WeatherDay from "./WeatherDay";
 class Weather extends React.Component {
    render() {
        return(
        <WeatherDay 
        descWeather={this.props.seeWeathetState}/>
        );
    }
}
export default Weather;