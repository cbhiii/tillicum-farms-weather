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
              <div><span className="big-temp">{t}<span className="wi wi-degrees"></span></span></div>
              {
                this.props.t > 69 && this.props.hi > this.props.t
                ? <div>Heat index: {this.props.hi}<span className="wi wi-degrees"></span></div>
                : null
              }
              {
                this.props.t < 50 && this.props.wc < this.props.t
                ? <div>Wind chill: {this.props.wc}<span className="wi wi-degrees"></span></div>
                : null
              }
            </div>
          </Col>

          <Col xs={4}>
            <div className="weather-left">
              <div>Winds: {this.props.wdir} {this.props.w} (G {this.props.wgust})</div>
              <div>Humidity: {this.props.hum}%</div>
              <div>UV: {this.props.uv}</div>
              <div>Rain total: {this.props.r} in</div>
              <div>Rain rate: {this.props.rr} in/h</div>
            </div>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Current;
