// New weather website for huffman.info
// 20190406, Chuck Huffman

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import convert from 'xml-js';
import './App.css';
import './assets/weather-icons.css';
import stationData from './data/data.xml';
import Header from './Header'
import Current from './Current'
import Details from './Details'
import Camera from './Camera'
import Forecast from './Forecast'

const forecastData = 'https://api.weather.gov/gridpoints/GRR/46,52/forecast';
const hourlyForecastData = 'https://api.weather.gov/gridpoints/GRR/46,52/forecast/hourly';
const alertData = 'https://api.weather.gov/alerts/active?point=43.0948,-85.4676';

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
    year1: [],
    forecast: [],
    hourlyForecast: [],
    alerts: []
  }

  updateLocal = () => {
    let result = {};
    let allData = [];

    fetch(stationData)
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
        },
          // () => {
          //  console.log(this.state)
          // }
        )
    })
    .catch(err => console.log("Error getting and/or processing local weather data file: ",err))
  }

  updateNWS = () => {
    // Get current forecast data from the NWS
    fetch(forecastData)
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState(state => {
        state.forecast = data.properties
      },
        // () => {
        //  console.log(this.state)
        // }
      )
    })
    .catch(err => console.log("Error getting and/or processing NWS forecast data: ",err))

    fetch(hourlyForecastData)
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState(state => {
        state.hourlyForecast = data.properties
      },
        // () => {
        //  console.log(this.state)
        // }
      )
    })
    .catch(err => console.log("Error getting and/or processing NWS hourly data: ",err))

    fetch(alertData)
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState(state => {
        state.alerts = data
      },
        // () => {
        //  console.log(this.state)
        // }
      )
    })
    .catch(err => console.log("Error getting and/or processing NWS alert data: ",err))

  }

  componentWillMount() {
    this.updateLocal()
    this.updateNWS()
  }

  render() {

    console.log(this.state);

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
