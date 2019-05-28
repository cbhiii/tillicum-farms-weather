// New weather website for huffman.info
// 20190406, Chuck Huffman

import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class Forecast extends Component {

  render() {

    return (

      <div className="Forecast">
        Forecast
        <div className="forecast-text">
          {this.props.fshort}
        </div>
        <div className="forecast-text">
          {this.props.fperiod}: {this.props.flong}
        </div>
      </div>

    );
  }
}

export default Forecast;
