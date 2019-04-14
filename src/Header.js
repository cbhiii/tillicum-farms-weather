// New weather website for huffman.info
// 20190406, Chuck Huffman

import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class Header extends Component {

  render() {

    return (

      <div className="Header">
        <Row>
          <Col xs={12}>
            Tillicum Farms Weather
          </Col>
        </Row>
      </div>

    );
  }
}

export default Header;
