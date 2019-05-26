// New weather website for huffman.info
// 20190406, Chuck Huffman

import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class Current extends Component {

  render() {

    return (

      <div className="Current">
        <Row>
          <Col xs={6}>
            <div className="temp">
              <span className="big-temp">{Math.round(this.props.temp)}&deg;</span>
              <p className="hilo-temp"><span className="wi wi-direction-up"></span> 83º <span className="wi wi-direction-down"></span> 54º</p>
            </div>
          </Col>

          <Col xs={6}>
            <div className="weather">
              <span className="big-temp wi wi-day-thunderstorm"></span>
            </div>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Current;
