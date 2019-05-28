// New weather website for huffman.info
// 20190406, Chuck Huffman

import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class Details extends Component {

  render() {

    return (

      <div className="Details">
        <Row>
          <Col xs={4}>
            <div className="sun">
              <ul>
                <li><span className="wi wi-sunrise"></span> 07:15a</li>
                <li><span className="wi wi-sunset"></span> 08:42p</li>
              </ul>
            </div>
          </Col>
          <Col xs={4}>
            <div className="sun">
              <ul>
                <li><span className="wi wi-wind wi-from-ese"></span> 07:15a</li>
                <li><span className="wi wi-sunset"></span> 08:42p</li>
              </ul>
            </div>
          </Col>
          <Col xs={4}>
            <div className="sun">
              <ul>
                <li><span className="wi wi-sunrise"></span> 07:15a</li>
                <li><span className="wi wi-sunset"></span> 08:42p</li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Details;
