// New weather website for huffman.info
// 20190406, Chuck Huffman

import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class Current extends Component {

  render() {

    const { t, nexthr, cond } = this.props;

    return (

      <div className="Current">
      Currently
        <Row>
          <Col xs={4}>
            <div className="weather">
              <span className="big-temp wi wi-day-thunderstorm"></span>
              <p>{cond}</p>
            </div>
          </Col>

          <Col xs={4}>
            <div className="temp">
              <span className="big-temp">{t}°</span>
{              // <span className="small">Since midnight</span>
}              <p className="hilo-temp"><span className="wi wi-direction-up"></span> 83° <span className="wi wi-direction-down"></span> 54°</p>
            </div>
          </Col>

          <Col xs={4}>
            <div className="weather">
              {this.props.nexthr}
            </div>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Current;
