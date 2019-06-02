// New weather website for huffman.info
// 20190406, Chuck Huffman

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';
import './assets/weather-icons.css';
import './assets/weather-icons-wind.css';
import localData from './data/data.txt';
import Header from './Header'
import Current from './Current'
import Details from './Details'
import Camera from './Camera'
import Forecast from './Forecast'
import Alerts from './Alerts'

// update NWS URLs for local area. More info here:
// https://forecast-v3.weather.gov/documentation as 2019 05 27
const currentURL = 'https://api.weather.gov/stations/KGRR/observations/current';
const forecastURL = 'https://api.weather.gov/gridpoints/GRR/46,52/forecast';
const alertURL = 'https://api.weather.gov/alerts/active?point=43.0948,-85.4676';
// for testing of alerts when none present from above URL
// const alertURL = 'https://api.weather.gov/alerts/active/area/MI';

class App extends Component {

  state = {
    alerts: [],
    wx: {
      cond: '-',
      condt: '-',
      t: '-',
      tt: '-',
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
      baro: '-',
      barot: '-',
      r: '-',
      rr: '-',
      uv: '-',
      uvmax: '-',
      tnow: '0:0',
      srise: '0:0',
      sset: '0:0',
      dlen: '0:0',
      mrise: '0:0',
      mset: '0:0',
      mphase: '-',
      flong0: '-',
      fshort0: '-',
      fperiod0: '-',
      fIsDay0: false,
      ftemp0: '-',
      fwind0: '-',
      fwindd0: '-',
      flong1: '-',
      fshort1: '-',
      fperiod1: '-',
      fIsDay1: false,
      ftemp1: '-',
      fwind1: '-',
      fwindd1: '-',
      flong2: '-',
      fshort2: '-',
      fperiod2: '-',
      fIsDay2: false,
      ftemp2: '-',
      fwind2: '-',
      fwindd2: '-',
    }
  }

  //
  // get all weather station data and populate variables
  //


  //
  // get local station data
  //
  updateLocal = () => {
    let results = {};
    let l = {};

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
            tt: l.hour1_th0_temp_trend,
            tmax: Math.round(l.day1_th0_tempmax_f),
            tmin: Math.round(l.day1_th0_tempmin_f),
            hi: Math.round(l.actual_th0_heatindex_f),
            himax: Math.round(l.day1_th0_heatindexmax_f),
            wc: Math.round(l.actual_wind0_chill_f),
            wcmin: Math.round(l.day1_wind0_chillmin_f),
            dew: Math.round(l.actual_th0_dew_f),
            hum: l.actual_th0_hum_rel,
            w: Math.round(l.actual_wind0_speed_mph),
            wdir: l.actual_wind0_dir_en.toLowerCase(),
            wgust: Math.round(l.last15m_wind0_gustspeedmax_mph),
            r: l.day1_rain0_total_in,
            rr: l.actual_rain0_rate_in,
            uv: Math.round(l.actual_uv0_index),
            uvmax: Math.round(l.day1_uv0_indexmax),
            baro: l.actual_thb0_sealevel_inhg,
            barot: l.hour1_thb0_press_trend,
            tnow: l.actual_date0_hour_local+':'+l.actual_date0_min_local,
            srise: l.actual_sunrise_standard_local,
            sset: l.actual_sunset_standard_local,
            dlen: l.actual_daylength_standard_hhmm,
            mrise: l.actual_moonrise_standard_local,
            mset: l.actual_moonset_standard_local,
            mphase: l.actual_lunar_phase_en

          }}
        },
          // () => {
          //  console.log(this.state)
          // }
        );
      })
    // catch and display any errors
    .catch(err => console.error("Error getting and/or processing local weather data text file: ",err))
  }

  //
  // get weather data from NWS
  //
  updateNWS = () => {

    //
    // get current weather condition
    //
    fetch(currentURL)
    .then(response => {
      // return response in JSON
      return response.json()
    })
    .then(data => {
      this.setState( state => {
        state.wx = {...state.wx, ...{
          cond: data.properties.textDescription,
          condt: data.properties.timestamp
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
          fIsDay0: data.properties.periods[0].isDaytime,
          fshort0: data.properties.periods[0].shortForecast,
          flong0: data.properties.periods[0].detailedForecast,
          ftemp0: data.properties.periods[0].temperature,
          fwindd0: data.properties.periods[0].windDirection.toLowerCase(),
          fwind0: data.properties.periods[0].windSpeed,
          fperiod1: data.properties.periods[1].name,
          fIsDay1: data.properties.periods[1].isDaytime,
          fshort1: data.properties.periods[1].shortForecast,
          flong1: data.properties.periods[1].detailedForecast,
          ftemp1: data.properties.periods[1].temperature,
          fwindd1: data.properties.periods[1].windDirection.toLowerCase(),
          fwind1: data.properties.periods[1].windSpeed,
          fperiod2: data.properties.periods[2].name,
          fIsDay2: data.properties.periods[2].isDaytime,
          fshort2: data.properties.periods[2].shortForecast,
          flong2: data.properties.periods[2].detailedForecast,
          ftemp2: data.properties.periods[2].temperature,
          fwindd2: data.properties.periods[2].windDirection.toLowerCase(),
          fwind2: data.properties.periods[2].windSpeed,
        }};
      },
        // () => {
        //  console.log(this.state)
        // }
      )
    })
    .catch(err => console.error("Error getting and/or processing NWS forecast data: ",err))
  }

  //
  // get weather alerts from NWS
  //
  updateAlerts = () => {
    fetch(alertURL)
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({
        alerts: data.features,
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
    this.updateAlerts()
  }

  render() {

    // console.log("Render",this.state);

    const { wx, alerts } = this.state;

    // if (wx.t === "-") {
    //   return (
    //     <div className="App">
    //       Waiting for weather data retrieval ...
    //     </div>
    //   )
    // } else {
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
                <Alerts
                  alerts={alerts}
                >
                </Alerts>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Current
                  cond={wx.cond}
                  tnow={wx.tnow}
                  trise={wx.srise}
                  tset={wx.sset}
                  t={wx.t}
                  tt={wx.tt}
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
                  baro={wx.baro}
                  barot={wx.barot}
                >
                </Current>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Forecast
                  fperiod0={wx.fperiod0}
                  fIsDay0={wx.fIsDay0}
                  fshort0={wx.fshort0}
                  flong0={wx.flong0}
                  ftemp0={wx.ftemp0}
                  fwind0={wx.fwind0}
                  fwindd0={wx.fwindd0}
                  fperiod1={wx.fperiod1}
                  fIsDay1={wx.fIsDay1}
                  fshort1={wx.fshort1}
                  flong1={wx.flong1}
                  ftemp1={wx.ftemp1}
                  fwind1={wx.fwind1}
                  fwindd1={wx.fwindd1}
                  fperiod2={wx.fperiod2}
                  fIsDay2={wx.fIsDay2}
                  fshort2={wx.fshort2}
                  flong2={wx.flong2}
                  ftemp2={wx.ftemp2}
                  fwind2={wx.fwind2}
                  fwindd2={wx.fwindd2}
                >
                </Forecast>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Details
                  srise={wx.srise}
                  sset={wx.sset}
                  dlen={wx.dlen}
                  mrise={wx.mrise}
                  mset={wx.mset}
                  mphase={wx.mphase}
                >
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
    // }
  }
}

export default App;
