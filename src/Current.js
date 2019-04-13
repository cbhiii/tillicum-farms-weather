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
          <Col xs={8} style={{border: '1px solid red'}}>
            <div className="big-temp">
              45<span className="wi wi-night-sleet"></span>
            </div>
          </Col>
          <Col xs={4} style={{border: '1px solid orange'}}>
            <div className="other-temp">
              hi: 53ºF
              lo: 34ºF
            </div>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Current;
