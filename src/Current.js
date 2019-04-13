// New weather website for huffman.info
// 20190406, Chuck Huffman

import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import './App.css';

class Current extends Component {

  render() {

    return (

      <div className="Current">
        <Row>
          <Col xs={4} style={{border: '1px solid red'}}>
            <div className="temp">
              <span className="big-temp">70</span>
              <span className="big-temp wi wi-fahrenheit"></span>
              <p className="hilo-temp">hi: 53ºF lo: 34ºF</p>
            </div>
          </Col>

          <Col xs={4} style={{border: '1px solid green'}}>
            <div className="weather">
              <span className="big-temp wi wi-day-sleet-storm"></span>
              <p>stomy sleet</p>
            </div>
          </Col>

          <Col xs={4} style={{border: '1px solid orange'}}>
            <div className="sun">
              <p><span className="wi wi-sunrise"></span>07:15 am</p>
              <p><span className="wi wi-sunset"></span>08:42 pm</p>
            </div>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Current;
