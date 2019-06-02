// New weather website for huffman.info
// 20190406, Chuck Huffman

import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class Details extends Component {

  render() {

    return (

      <div className="Details">
        Details and Limits
        <Row>
          <Col xs={4}>
            <div className="sun">
              <ul>
                <li><span className="wi wi-sunrise"></span> {this.props.srise}</li>
                <li><span className="wi wi-sunset"></span> {this.props.sset}</li>
                <li><span className="wi wi-time-2"></span> {this.props.dlen}</li>
              </ul>
            </div>
          </Col>
          <Col xs={4}>
            <div className="sun">
              <ul>
                <li><span className="wi wi-horizon-alt"></span> 07:15a</li>
                <li><span className="wi wi-sunset"></span> 08:42p</li>
              </ul>
            </div>
          </Col>
          <Col xs={4}>
            <div className="sun">
              <ul>
                <li><span className="wi wi-moonrise"></span> {this.props.mrise}</li>
                <li><span className="wi wi-moonset"></span> {this.props.mset}</li>
                <li><span className="wi wi-moon-alt-full"></span> {this.props.mphase}</li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Details;
