// New weather website for huffman.info
// 20190406, Chuck Huffman

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import convert from 'xml-js';
import './App.css';
import data from './data.xml';
import Header from './Header'
import Current from './Current'
import Details from './Details'
import Camera from './Camera'
import Forecast from './Forecast'

class App extends Component {

  state = {
    wxData: data
  }

  updateWeather = () => {

    // console.log(this.state);
    // fetch(this.state.data)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //       console.log('error:',err);
    //   })
    // to convert xml text to json text
    // let result = convert.xml2json(this.state.data, {compact: false, spaces: 4});
    // console.log(result);

    // var result2 = convert.xml2json(this.state.data, {compact: false, spaces: 4});
    // console.log(result2);

  }

  componentDidMount() {
    this.updateWeather()
  }

  render() {

    console.log(this.state);

    return (

      <div className="App">
        <Grid fluid style={{border: '1px solid blue'}}>
          <Row>
            <Col xs={12} style={{border: '1px solid green'}}>
              <Header>
              </Header>
            </Col>
          </Row>
          <Row>
            <Col xs={6} style={{border: '1px solid red'}}>
              <Current>
              </Current>
            </Col>
            <Col xs={6} style={{border: '1px solid orange'}}>
              <Details>
              </Details>
            </Col>
          </Row>
          <Row>
            <Col xs={12} style={{border: '1px solid brown'}}>
              <Camera>
              </Camera>
            </Col>
          </Row>
          <Row>
            <Col xs={12} style={{border: '1px solid brown'}}>
              <Forecast>
              </Forecast>
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}

export default App;
