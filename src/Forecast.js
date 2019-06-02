// New weather website for huffman.info
// 20190406, Chuck Huffman

import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class Forecast extends Component {

  render() {

    return (

      <div className="Forecast">
        Forecast
        <Row>
          <Col xs={4}>
            <div className="fperiod">{this.props.fperiod0}</div>
            <div className="forecast-text">
              <div>{this.props.fshort0}</div>
              <div>{this.props.fIsDay0 ? 'High: ' : 'Low: '}{this.props.ftemp0}<span className="wi wi-degrees"></span></div>
              <div><span className={`wi wi-wind wi-towards-${ this.props.fwindd0}`}></span> {this.props.fwind0}</div>
            </div>
          </Col>
          <Col xs={4}>
            <div className="fperiod">{this.props.fperiod1}</div>
            <div className="forecast-text">
              <div>{this.props.fshort1}</div>
              <div>{this.props.fIsDay1 ? 'High: ' : 'Low: '}{this.props.ftemp1}<span className="wi wi-degrees"></span></div>
              <div><span className={`wi wi-wind wi-towards-${ this.props.fwindd1}`}></span> {this.props.fwind1}</div>
            </div>
          </Col>
          <Col xs={4}>
            <div className="fperiod">{this.props.fperiod2}</div>
            <div className="forecast-text">
              <div>{this.props.fshort2}</div>
              <div>{this.props.fIsDay2 ? 'High: ' : 'Low: '}{this.props.ftemp2}<span className="wi wi-degrees"></span></div>
              <div><span className={`wi wi-wind wi-towards-${ this.props.fwindd2}`}></span> {this.props.fwind2}</div>
            </div>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Forecast;
