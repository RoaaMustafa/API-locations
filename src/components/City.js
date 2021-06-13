import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import { Form, Button,Image,Row,Col } from "react-bootstrap";

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locData: "",
      errMsg: "",
      displayErrMsg: false,
      displayMap: false,
    };
  }
  getLocation = async (event) => {
    event.preventDefault();
    let seachQuery = event.target.searchQuery.value;
    let locURL = `https://us1.locationiq.com/v1/search.php?key=pk.021dad5b6766910aca9a337aabfde6e7&q=${seachQuery}&format=json`;
    try {
      let locResult = await axios.get(locURL);
      console.log(locResult.data);
      this.setState({
        locData: locResult.data[0],
        displayMap: true,
      });
    } catch {
      this.setState({
        errMsg: "OOPS! 404 Error This is a bad Response",
        displayErrMsg: true,
      });
    }
  };
  render() {
    return (
      <div >
        <Form onSubmit={this.getLocation} className="container-sec1">
          <Form.Group controlId="formBasicEmail">
              <Row>
                  <Col>
            <Form.Control
              className="form-text"
              type="text"
              placeholder="city name"
              name="searchQuery"
            ></Form.Control>
            </Col>
            <Col>
            <Button variant="primary" type="submit" value="search">
              Search
            </Button></Col>
            </Row>
          </Form.Group>
        </Form>
        <div className="container-sec2">
        <p>{this.state.locData.display_name}</p>
        <p>{this.state.locData.lon}</p>
        <p>{this.state.locData.lat}</p>
        {this.state.displayMap && (
          <Image
            src={`https://maps.locationiq.com/v3/staticmap?key=pk.021dad5b6766910aca9a337aabfde6e7&center=${this.state.locData.lat},${this.state.locData.lon}&zoom=15&size=480x450&format=png&maptype=roadmap&markers=icon:small-red-cutout|${this.state.locData.lat},${this.state.locData.lon},&markers=icon:small-red-cutout|${this.state.locData.lat},${this.state.locData.lon}`}
            alt="map" fluid thumbnail 
          />
        )}
        {this.state.displayErrMsg && this.state.errMsg }
      </div>
      </div>
    );
  }
}

export default City;
