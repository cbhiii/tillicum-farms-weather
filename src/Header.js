// New weather website for huffman.info
// 20190406, Chuck Huffman

import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class Header extends Component {

  render() {

    return (

      <div className="Header">
        <Row>
          <Col className="header-left" xs={8}>
            Tillicum Farms Weather
          </Col>
          <Col className="header-right" xs={4}>
            11:38 am
          </Col>
        </Row>
      </div>

    );
  }
}

export default Header;
