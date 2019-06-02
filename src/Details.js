// New weather website for huffman.info
// 20190406, Chuck Huffman

import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class Details extends Component {

  render() {

    return (
      
      <div className="Details">
        Sun and Moon
        <Row>
          <Col xs={1}>
            <div className="sun">
            </div>
          </Col>
          <Col xs={4}>
            <Row>
              <Col xs={4}>
                <div className="weather-center">
                    <div><span className="wi wi-sunrise"></span></div>
                    <div><span className="wi wi-sunset"></span></div>
                    <div><span className="wi wi-time-2"></span></div>
                </div>
              </Col>
              <Col xs={8}>
                <div className="weather-left">
                    <div>{this.props.srise}</div>
                    <div>{this.props.sset}</div>
                    <div>{this.props.dlen.split(':')[0]}h {this.props.dlen.split(':')[1]}m</div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={2}>
            <div className="sun">
            </div>
          </Col>
          <Col xs={4}>
            <Row>
              <Col xs={3}>
                <div className="weather-center">
                    <div><span className="wi wi-moonrise"></span></div>
                    <div><span className="wi wi-moonset"></span></div>
                    <div><span className="wi wi-moon-alt-full"></span></div>
                </div>
              </Col>
              <Col xs={9}>
                <div className="weather-left">
                    <div>{this.props.mrise}</div>
                    <div>{this.props.mset}</div>
                    <div>{this.props.mphase}% full</div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={1}>
            <div className="sun">
            </div>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Details;
