import React from 'react'
 class Weather extends React.Component {
    render() {
        return(
            <div>
                {<p>{this.props.seeWeathetState.description} </p>}
                 {<p>{this.props.seeWeathetState.date}</p>}
            </div>
        );
    }
}
export default Weather;