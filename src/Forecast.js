// New weather website for huffman.info
// 20190406, Chuck Huffman

import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class Forecast extends Component {

  render() {

    return (

      <div className="Forecast">
        Forecast
        <Row className="forecast-text">
          <Col xs={4}>
            <span className="fperiod">{this.props.fperiod0}</span><br />
            <span className="forecast"> {this.props.fshort0}<br />{
              this.props.fIsDay0 ? 'High: ' : 'Low: '
            }{this.props.ftemp0}°<br /><span className={`wi wi-wind wi-from-${ this.props.fwindd0}`}></span> {this.props.fwind0}</span>
          </Col>
          <Col xs={4}>
            <span className="fperiod">{this.props.fperiod1}</span><br />
            <span className="forecast"> {this.props.fshort1}<br />{
              this.props.fIsDay1 ? 'High: ' : 'Low: '
            }{this.props.ftemp1}°<br /><span className={`wi wi-wind wi-from-${ this.props.fwindd1}`}></span> {this.props.fwind1}</span>
          </Col>
          <Col xs={4}>
            <span className="fperiod">{this.props.fperiod2}</span><br />
            <span className="forecast"> {this.props.fshort2}<br/>{
              this.props.fIsDay2 ? 'High: ' : 'Low: '
            }{this.props.ftemp2}°<br /><span className={`wi wi-wind wi-from-${ this.props.fwindd2}`}></span> {this.props.fwind2}</span>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Forecast;
