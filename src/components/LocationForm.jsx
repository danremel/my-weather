import React from 'react';
import axios from 'axios';

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
      city: '',
      state: '',
      success: false,
      errorMsg: ''
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
    this.getWeather(this.state.latitude, this.state.longitude);
  }

  getWeather(lat, long) {
    axios.get('https://api.weather.gov/points/' + lat + ',' + long).then((response) => {
      const relativeLocation = response.data.properties.relativeLocation.properties;
      this.setState({
        city: relativeLocation.city,
        state: relativeLocation.state,
        success: true
      })
    }).catch(error => {
      console.error(error);
      this.setState({
        success: false,
        errorMsg: 'Invalid Point'
      });
    })
  }

  render() {
    return(
      <div className="inner-container">
        <form onSubmit={this.submitLocation.bind(this)}>
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

        <div className="location-display">
          { this.state.success &&
          <div className="success-location">
            <h4>You are located in:</h4>
            <h3>{this.state.city}, {this.state.state}</h3>
          </div>
          }
          { !this.state.success &&
            <div className="invalid-location">
              <h3>{this.state.errorMsg}</h3>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default LocationForm;
