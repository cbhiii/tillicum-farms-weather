// New weather website for huffman.info
// 20190406, Chuck Huffman

import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class Alerts extends Component {

  render() {

    if (this.props.alerts.length > 0) {
      return (
        <div className="Alerts">
          Weather Alerts
          <Row>
            <Col xs={1}>
              <div className="sun">
              </div>
            </Col>
            <Col xs={10}>
              <div className="sun">
                {
                  this.props.alerts.map((alert, index) => {
                  let date = new Date(alert.properties.ends);
                  let month = date.getMonth()+1;
                  let day = date.getDate();
                  let hour = date.getHours();
                  let min = date.getMinutes();
                  if (day < 10) {
                    day = '0' + day;
                  }
                  if (month < 10) {
                    month = '0' + month;
                  }
                  if (hour < 10) {
                    hour = '0' + hour;
                  }
                  if (min < 10) {
                    min  = '0' + min;
                  }
                  if (hour < 12) {
                    min = min + 'am';
                  } else {
                    hour = (hour-12);
                    min = min + 'pm';
                  }
                  return (
                  <div key={index}>
                    {alert.properties.event} until {month + '/' + day} at {hour + ':' + min}
                  </div>
                  )
                })}
              </div>
            </Col>
            <Col xs={1}>
              <div className="sun">
              </div>
            </Col>
          </Row>
        </div>
      );
    } else {
      return null
    }
  }
}

export default Alerts;
