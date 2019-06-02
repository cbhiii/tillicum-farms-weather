// New weather website for huffman.info
// 20190406, Chuck Huffman

import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class Current extends Component {

  render() {

    // const { cond } = this.props;

    let displaycond = 'wi-na';

    if (this.props.cond.length > 1) {

      let condLower = this.props.cond.toLowerCase();
      let dayNight = 'night';
      let hnow = this.props.tnow.split(":")[0];
      let hrise = this.props.trise.split(":")[0];
      let hset = this.props.tset.split(":")[0];
      if (hnow >= hrise && hnow <= hset) {
        dayNight = 'day';
      }

      // all lowercase searches in condLower
      console.log(condLower);
      switch (true) {
        case (condLower.includes('tornado')):
          displaycond = 'wi-tornado';
          break;
        case (condLower.includes('hail') ):
          displaycond = 'wi-hail';
          break;
        case (condLower.includes('hot') ):
          displaycond = 'wi-day-hot';
          break;
        case (condLower.includes('haze') || condLower.includes('hazy') ):
          displaycond = 'wi-day-haze';
          break;
        case (condLower.includes('sleet')):
          displaycond = 'wi-sleet';
          break;
        case (condLower.includes('fog') || condLower.includes('mist')):
          displaycond = 'wi-fog';
          break;
        case (condLower.includes('thunderstorm') && condLower.includes('showers')):
          displaycond = 'wi-storm-showers';
          break;
        case (condLower.includes('thunderstorm') || condLower.includes('severe')):
          displaycond = 'wi-thunderstorm';
          break;
        case (condLower.includes('lightning')):
          displaycond = 'wi-lightning';
          break;
        case (condLower.includes('cloud') && condLower.includes('wind')):
          displaycond = 'wi-cloudy-gusts';
          break;
        case ((condLower.includes('strong') && condLower.includes('wind')) || condLower.includes('windy')):
          displaycond = 'wi-lightning';
          break;
        case ((condLower.includes('light') && condLower.includes('rain')) || condLower.includes('sprinkle')):
          displaycond = 'wi-sprinkle';
          break;
        case (condLower.includes('rain') && condLower.includes('wind')):
          displaycond = 'wi-rain-wind';
          break;
        case (condLower.includes('rain') && condLower.includes('mix')):
          displaycond = 'wi-rain-mix';
          break;
        case (condLower.includes('snow') && (condLower.includes('wind') || condLower.includes('showers'))):
          displaycond = 'wi-snow-wind';
          break;
        case (condLower.includes('snow')):
          displaycond = 'wi-snow';
          break;
        case (condLower.includes('showers')):
          displaycond = 'wi-showers';
          break;
        case (condLower.includes('rain')):
          displaycond = 'wi-rain';
          break;
        case (condLower.includes('cloudy') && !condLower.includes('partly')):
          displaycond = 'wi-cloudy';
          break;
        case (dayNight==='day' && (condLower.includes('mostly') || condLower.includes('partly')) && (condLower.includes('sunny') || condLower.includes('clear') || condLower.includes('cloudy'))):
          displaycond = 'wi-day-cloudy';
          break;
        case (dayNight==='night' && (condLower.includes('mostly') || condLower.includes('partly')) && condLower.includes('clear')):
          displaycond = 'wi-night-alt-cloudy';
          break;
        case (dayNight==='day' && (condLower.includes('sunny') || condLower.includes('clear'))):
          displaycond = 'wi-day-sunny';
          break;
        case (dayNight==='night' && (condLower.includes('star') || condLower.includes('clear'))):
          displaycond = 'wi-night-clear';
          break;
        default:
          displaycond = 'wi-na';
      }
    }

    return (

      <div className="Current">
      Currently
        <Row>
          <Col xs={4}>
            <div className="weather">
              <span className={`big-temp wi ${displaycond}`}></span>
                <p>{this.props.cond}</p>
            </div>
          </Col>

          <Col xs={4}>
            <div className="temp">
              <div>
                <span className="big-temp">{this.props.t}<span className="wi wi-degrees"></span></span>
              </div>
              {
                this.props.t > 69 && this.props.hi > this.props.t
                ? <div>Heat index: {this.props.hi}<span className="wi wi-degrees"></span></div>
                : null
              }
              {
                this.props.t < 50 && this.props.wc < this.props.t
                ? <div>Wind chill: {this.props.wc}<span className="wi wi-degrees"></span></div>
                : null
              }
            </div>
          </Col>

          <Col xs={4}>
            <Row>
              <Col xs={3}>
                <div className="weather-center">
                  <div>
                    <span className="wi wi-strong-wind"></span>
                  </div>
                  <div>
                    <span className="wi wi-humidity"></span>
                  </div>
                  <div>
                    <span className="wi wi-raindrop"></span>
                  </div>
                  <div>
                    <span className="wi wi-umbrella"></span>
                  </div>
                  <div>
                    <span className="wi wi-barometer"></span>
                  </div>
                  <div>
                    <span>UV</span>
                  </div>
                </div>
              </Col>
              <Col xs={9}>
                <div className="weather-left">
                  <div>
                    <span className={`wi wi-wind wi-towards-${ this.props.wdir}`}></span> {this.props.w} (G {this.props.wgust})
                  </div>
                  <div>
                    {this.props.hum}%
                  </div>
                  <div>
                    {this.props.r} in
                  </div>
                  <div>
                    {this.props.rr} in/h
                  </div>
                  <div>
                    {this.props.baro+' '}
                    {this.props.barot == 0 && <span className="wi wi-direction-right"></span>}
                    {this.props.barot > 0 && <span className="wi wi-direction-up-right"></span>}
                    {this.props.barot < 0 && <span className="wi wi-direction-down-right"></span>}
                  </div>
                  <div>
                    {this.props.uv}
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

    );
  }
}



export default Current;
