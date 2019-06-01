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
              this.props.fperiod0==='Tonight' ? 'Low: ' : 'High: '
            }{this.props.ftemp0}°<br />Winds: {this.props.fwind0}</span>
          </Col>
          <Col xs={4}>
            <span className="fperiod">{this.props.fperiod1}</span><br />
            <span className="forecast"> {this.props.fshort1}<br />{
              this.props.fperiod1==='Tonight' ? 'Low: ' : 'High: '
            }{this.props.ftemp1}°<br />Winds: {this.props.fwind1}</span>
          </Col>
          <Col xs={4}>
            <span className="fperiod">{this.props.fperiod2}</span><br />
            <span className="forecast"> {this.props.fshort2}<br/>{
              this.props.fperiod2==='Tonight' ? 'Low: ' : 'High: '
            }{this.props.ftemp2}°<br />Winds: {this.props.fwind2}</span>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Forecast;
