// New weather website for huffman.info
// 20190406, Chuck Huffman

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import convert from 'xml-js';
import './App.css';
import './assets/weather-icons.css';
import wxData from './data/data.xml';
import Header from './Header'
import Current from './Current'
import Details from './Details'
import Camera from './Camera'
import Forecast from './Forecast'

class App extends Component {

  state = {
    actual: [],
    alltime: [],
    day1: [],
    hour1: [],
    last15m: [],
    last24h: [],
    last60m: [],
    month1: [],
    year1: []
  }

  updateWeather = () => {
    let result = {};
    let allData = [];

    fetch(wxData)
      .then((response) => response.text())
       .then(xml => {
         result = convert.xml2json(xml, {compact: true, spaces: 4});
         this.setState(state => {
           allData = JSON.parse(result)
           state.actual = allData.meteohub.data[0]
           state.alltime = allData.meteohub.data[1]
           state.day1 = allData.meteohub.data[2]
           state.hour1 = allData.meteohub.data[3]
           state.last15m = allData.meteohub.data[4]
           state.last24h = allData.meteohub.data[5]
           state.last60m = allData.meteohub.data[6]
           state.month1 = allData.meteohub.data[7]
           state.year1 = allData.meteohub.data[8]
         }
         , () => {
           console.log(this.state.wxData)
         })
    })
    .catch(err => console.log("Error getting and/or processing weather data file: ",err))
  }

  componentWillMount() {

    this.updateWeather()

  }

  render() {

    return (

      <div className="App">
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <Header>
              </Header>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Current>
              </Current>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Forecast>
              </Forecast>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Camera>
              </Camera>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Details>
              </Details>
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}

export default App;
