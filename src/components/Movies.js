import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
class Movies extends React.Component {
  render() {
    return (
      <div>
        {this.props.displayMovies.map((item,indx) => {
          return (
            <div key={indx}>
                <Card>
              {
               <Card.Text>
                 Movie {indx} : {item.original}
                </Card.Text>
              }
              {<Card.Text> overview  : {item.overview}</Card.Text>}
              {<Card.Text> averageVotes : {item.averageVotes}</Card.Text>}
              {<Card.Text>totalVotes :{item.totalVotes}</Card.Text>}
              {<Card.Text>imagel:{item.imagel}</Card.Text>}
              {<Card.Text>popularity :{item.popularity}</Card.Text>}
              {<Card.Text>releasedOn  : {item.releasedOn}</Card.Text>}
              </Card>
            </div>
          )
            }
        )}
      </div>
      );
  }
}
export default Movies;
