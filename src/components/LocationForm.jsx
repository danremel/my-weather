import React from 'react';
import axios from 'axios';

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: ''
    }
  }

  onLatChange(e) {
    this.setState({ latitude: e.target.value });
  }

  onLongChange(e) {
    this.setState({ longitude: e.target.value });
  }

  submitLocation(e) {
    e.preventDefault();
    console.log("derp");
    this.getWeather(this.state.latitude, this.state.longitude);
  }

  getWeather(lat, long) {
    axios.get('https://api.weather.gov/points/' + lat + ',' + long)
  }

  render() {
    return(
      <div className="inner-container">
        <form onSubmit={this.submitLocation()}>
          <div className="input-group">
            <label htmlFor="latitude">Latitude</label>
            <input
              type="text"
              className="form-input"
              onChange={this.onLatChange.bind(this)}/>
          </div>
          <div className="input-group">
            <label htmlFor="longitude">Longitude</label>
            <input
              type="text"
              className="form-input"
              onChange={this.onLongChange.bind(this)}/>
          </div>

          <input
            type="submit"
            className="submit-button"
            value="Submit"
          />
        </form>
      </div>
    )
  }
}

export default LocationForm;
