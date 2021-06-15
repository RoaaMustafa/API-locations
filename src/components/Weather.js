import React from 'react'
 class Weather extends React.Component {
    render() {
        return(
            <div>
                 {this.props.seeWeathetState.map((item, indx)=>{
                 return(
                     <div key={indx}>
                         {<p> wather for day {indx +1} : {item.description}</p>}
                         {<p>date  : {item.date}</p>}
                         </div>
                 )
                 }
                 )}
            </div>
        );
    }
}
export default Weather;