// New weather website for huffman.info
// 20190406, Chuck Huffman

import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import ellie from './assets/Ellie_300-small.jpg';

class Camera extends Component {

  render() {

    return (

      <div className="Camera">
        Camera
        <div>
          <img src={ellie} alt="-"></img>
        </div>
      </div>

    );
  }
}

export default Camera;
