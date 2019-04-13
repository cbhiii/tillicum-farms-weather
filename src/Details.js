// New weather website for huffman.info
// 20190406, Chuck Huffman

import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class Details extends Component {

  render() {

    return (

      <div className="Details">
        <Row>
          <Col xs={6}>
            <div className="sun">
              <p><span className="wi wi-sunrise"></span> 07:15 am</p>
              <p><span className="wi wi-sunset"></span> 08:42 pm</p>
            </div>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Details;
