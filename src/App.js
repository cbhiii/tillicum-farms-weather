// New weather website for huffman.info
// 20190406, Chuck Huffman

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';
import './assets/weather-icons.css';
import localData from './data/data.txt';
import Header from './Header'
import Current from './Current'
import Details from './Details'
import Camera from './Camera'
import Forecast from './Forecast'

// update NWS URLs for local area. More info here:
// https://forecast-v3.weather.gov/documentation as 2019 05 27
const currentURL = 'https://api.weather.gov/stations/KGRR/observations/current';
const forecastURL = 'https://api.weather.gov/gridpoints/GRR/46,52/forecast';
const hourlyURL = 'https://api.weather.gov/gridpoints/GRR/46,52/forecast/hourly';
const alertURL = 'https://api.weather.gov/alerts/active?point=43.0948,-85.4676';

class App extends Component {

  state = {
    alerts: [],
    wx: {
      cond: '-',
      t: '-',
      tmax: '-',
      tmin: '-',
      hi: '-',
      himax: '-',
      wc: '-',
      wcmin: '-',
      dew: '-',
      hum: '-',
      w: '-',
      wdir: '-',
      wgust: '-',
      r: '-',
      rr: '-',
      uv: '-',
      uvmax: '-',
      nexthr: '-',
      flong0: '-',
      fshort0: '-',
      fperiod0: '-',
      ftemp0: '-',
      fwind0: '-',
      flong1: '-',
      fshort1: '-',
      fperiod1: '-',
      ftemp1: '-',
      fwind1: '-',
      flong2: '-',
      fshort2: '-',
      fperiod2: '-',
      ftemp2: '-',
      fwind2: '-',
    }
  }

  //
  // get all weather station data and populate variables
  //
  updateWX = () => {
    let results = {};
    let l = {};

    //
    // get local station data
    //
    fetch(localData)
      // get text from fetch
      .then(response => response.text())
      // take data from text and process
      .then(data => {
        // split data at carrige return
        results = data.split('\n')
        // split results into key value pairs
        for (const result of results) {
          let obj = result.split(" ");
          l[obj[0]] = obj[1];
        }
        // pull local data into app variables
        this.setState(state => {
          state.wx = {...state.wx, ...{
            t: Math.round(l.actual_th0_temp_f),
            tmax: Math.round(l.day1_th0_tempmax_f),
            tmin: Math.round(l.day1_th0_tempmin_f),
            hi: Math.round(l.actual_th0_heatindex_f),
            himax: Math.round(l.day1_th0_heatindexmax_f),
            wc: Math.round(l.actual_wind0_chill_f),
            wcmin: Math.round(l.day1_wind0_chillmin_f),
            dew: Math.round(l.actual_th0_dew_f),
            hum: l.actual_th0_hum_rel,
            w: Math.round(l.actual_wind0_speed_mph),
            wdir: l.actual_wind0_dir_en,
            wgust: Math.round(l.last15m_wind0_gustspeedmax_mph),
            r: l.day1_rain0_total_in,
            rr: l.actual_rain0_rate_in,
            uv: Math.round(l.actual_uv0_index),
            uvmax: Math.round(l.day1_uv0_indexmax)
          }}
        },
          // () => {
          //  console.log(this.state)
          // }
        );
      })
    // catch and display any errors
    .catch(err => console.error("Error getting and/or processing local weather data text file: ",err))

    //
    // get current weather from NWS
    //
    fetch(currentURL)
    .then(response => {
      // return response in JSON
      return response.json()
    })
    .then(data => {
      this.setState( state => {
        state.wx = {...state.wx, ...{
          cond: data.properties.textDescription
        }};
      },
        // () => {
        //  console.log('current',this.state.wx.cond)
        // }
      )
    })
    .catch(err => console.error("Error getting and/or processing NWS current data: ",err))

    //
    // get forecast from NWS
    //
    fetch(forecastURL)
    .then(response => {
      // return response in JSON
      return response.json()
    })
    .then(data => {
      this.setState(state => {
        state.wx = {...state.wx, ...{
          fperiod0: data.properties.periods[0].name,
          fshort0: data.properties.periods[0].shortForecast,
          flong0: data.properties.periods[0].detailedForecast,
          ftemp0: data.properties.periods[0].temperature,
          fwind0: data.properties.periods[0].windDirection+" "+data.properties.periods[0].windSpeed,
          fperiod1: data.properties.periods[1].name,
          fshort1: data.properties.periods[1].shortForecast,
          flong1: data.properties.periods[1].detailedForecast,
          ftemp1: data.properties.periods[1].temperature,
          fwind1: data.properties.periods[1].windDirection+" "+data.properties.periods[1].windSpeed,
          fperiod2: data.properties.periods[2].name,
          fshort2: data.properties.periods[2].shortForecast,
          flong2: data.properties.periods[2].detailedForecast,
          ftemp2: data.properties.periods[2].temperature,
          fwind2: data.properties.periods[2].windDirection+" "+data.properties.periods[2].windSpeed,
        }};
      },
        // () => {
        //  console.log(this.state)
        // }
      )
    })
    .catch(err => console.error("Error getting and/or processing NWS forecast data: ",err))

    //
    // get hourly forecast from NWS
    //
    fetch(hourlyURL)
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState(state => {
        state.wx = {...state.wx, ...{
          nexthr: data.properties.periods[1].shortForecast,
        }};
      },
        // () => {
        //  console.log(this.state)
        // }
      )
    })
    .catch(err => console.error("Error getting and/or processing NWS hourly data: ",err))

    //
    // get weather alerts from NWS
    //
    fetch(alertURL)
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({
        alerts: data,
      },
        // () => {
        //  console.log(this.state)
        // }
      )
    })
    .catch(err => console.error("Error getting and/or processing NWS alert data: ",err))
  }

  componentDidMount() {
    this.updateWX()
  }

  render() {

    // console.log("Render",this.state);

    const { wx } = this.state;

    if (wx.t === "-") {
      return (
        <div className="App">
          Waiting for weather data retrieval ...
        </div>
      )
    } else {
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
                <Current
                  cond={wx.cond}
                  nexthr={wx.nexthr}
                  t={wx.t}
                  tmax={wx.tmax}
                  tmin={wx.tmin}
                  hi={wx.hi}
                  himax={wx.himax}
                  wc={wx.wc}
                  wcmin={wx.wcmin}
                  dew={wx.dew}
                  hum={wx.hum}
                  w={wx.w}
                  wdir={wx.wdir}
                  wgust={wx.wgust}
                  r={wx.r}
                  rr={wx.rr}
                  uv={wx.uv}
                  uvmax={wx.uvmax}
                >
                </Current>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Forecast
                  fperiod0={wx.fperiod0}
                  fshort0={wx.fshort0}
                  flong0={wx.flong0}
                  ftemp0={wx.ftemp0}
                  fwind0={wx.fwind0}
                  fperiod1={wx.fperiod1}
                  fshort1={wx.fshort1}
                  flong1={wx.flong1}
                  ftemp1={wx.ftemp1}
                  fwind1={wx.fwind1}
                  fperiod2={wx.fperiod2}
                  fshort2={wx.fshort2}
                  flong2={wx.flong2}
                  ftemp2={wx.ftemp2}
                  fwind2={wx.fwind2}
                >
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
      )
    }
  }
}

export default App;
