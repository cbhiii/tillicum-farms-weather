// New weather website for huffman.info
// 20190406, Chuck Huffman

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import convert from 'xml-js';
import './App.css';
import './assets/weather-icons.css';
import localData from './data/data.txt';
import Header from './Header'
import Current from './Current'
import Details from './Details'
import Camera from './Camera'
import Forecast from './Forecast'

const forecastURL = 'https://api.weather.gov/gridpoints/GRR/46,52/forecast';
const hourlyForecastURL = 'https://api.weather.gov/gridpoints/GRR/46,52/forecast/hourly';
const alertURL = 'https://api.weather.gov/alerts/active?point=43.0948,-85.4676';

class App extends Component {

  state = {
    local: [],
    forecast: [],
    hourlyForecast: [],
    alerts: [],
  }

  updateLocal = () => {
    let results = [];
    let allData = {};

    fetch(localData)
      .then((response) => response.text())
      .then(data => {

        results = data.split('\n')

        for (const result of results) {
          let obj = result.split(" ");
          allData[obj[0]] = obj[1];
        }

        this.setState({
          local: allData
        },
          // () => {
          //  console.log(this.state)
          // }
        );
      })
    .catch(err => console.error("Error getting and/or processing local weather data text file: ",err))
  }

  updateNWS = () => {
    // Get current forecast data from the NWS
    fetch(forecastURL)
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({
        forecast: data.properties
      },
        // () => {
        //  console.log(this.state)
        // }
      )
    })
    .catch(err => console.error("Error getting and/or processing NWS forecast data: ",err))

    fetch(hourlyForecastURL)
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({
        hourlyForecast: data.properties
      },
        // () => {
        //  console.log(this.state)
        // }
      )
    })
    .catch(err => console.error("Error getting and/or processing NWS hourly data: ",err))

    fetch(alertURL)
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({
        alerts: data,
        temp: '75'
      },
        // () => {
        //  console.log(this.state)
        // }
      )
    })
    .catch(err => console.error("Error getting and/or processing NWS alert data: ",err))

  }

  componentDidMount() {
    this.updateLocal()
    this.updateNWS()
  }

  render() {

    // console.log("Render",this.state);

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
              <Current temp={this.state.local.actual_th0_temp_f}>
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
              <Details>
              </Details>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Camera>
              </Camera>
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}

export default App;
