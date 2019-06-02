// New weather website for huffman.info
// 20190406, Chuck Huffman

import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class Current extends Component {




  render() {

    // const { cond } = this.props;


    return (

      <div className="Current">
      Currently
        <Row>
          <Col xs={4}>
            <div className="weather">
            <span className="big-temp wi wi-day-thunderstorm"></span>
              <p>{this.props.cond}</p>
            </div>
          </Col>

          <Col xs={4}>
            <div className="temp">
              <div>
                <span className="big-temp">{this.props.t}<span className="wi wi-degrees"></span></span>
              </div>
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
            <Row>
              <Col xs={3}>
                <div className="weather-center">
                  <div>
                    <span className="wi wi-strong-wind"></span>
                  </div>
                  <div>
                    <span className="wi wi-humidity"></span>
                  </div>
                  <div>
                    <span className="wi wi-raindrop"></span>
                  </div>
                  <div>
                    <span className="wi wi-umbrella"></span>
                  </div>
                  <div>
                    <span className="wi wi-barometer"></span>
                  </div>
                  <div>
                    <span>UV</span>
                  </div>
                </div>
              </Col>
              <Col xs={9}>
                <div className="weather-left">
                  <div>
                    <span className={`wi wi-wind wi-towards-${ this.props.wdir}`}></span> {this.props.w} (G {this.props.wgust})
                  </div>
                  <div>
                    {this.props.hum}%
                  </div>
                  <div>
                    {this.props.r} in
                  </div>
                  <div>
                    {this.props.rr} in/h
                  </div>
                  <div>
                    {this.props.baro+' '}
                    {this.props.barot == 0 && <span className="wi wi-direction-right"></span>}
                    {this.props.barot > 0 && <span className="wi wi-direction-up-right"></span>}
                    {this.props.barot < 0 && <span className="wi wi-direction-down-right"></span>}
                  </div>
                  <div>
                    {this.props.uv}
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

    );
  }
}



export default Current;
