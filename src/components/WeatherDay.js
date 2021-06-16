import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
class WeatherDay extends React.Component {
  render() {
    return (
      <aside className="weather-list">
        <ListGroup id="weather-list">
          {this.props.descWeather.map((item, indx) => {
            return (
              <div key={indx}>
                <ListGroup.Item  horizontal>
                📅 date : {item.date}   , 🌤️ day {indx + 1} : {item.description} 
                </ListGroup.Item >
              </div>
            );
          })}
        </ListGroup>
      </aside>
    );
  }
}
export default WeatherDay;
