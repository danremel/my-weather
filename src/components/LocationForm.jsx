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
      success: null,
      errorMsg: null,
      errors: []
    }
  }

  showValidationErr(element, message) {
    this.setState((prevState) => ( { errors: [...prevState.errors, { element, message }] } ));
  }

  clearValidationErr(element) {
    this.setState((prevState) => {
      let newArr = [];
      for(let err of prevState.errors) {
        if(element !== err.element) {
          newArr.push(err)
        }
      }
      return {errors: newArr};
    });
  }

  onLatChange(e) {
    this.setState({ latitude: e.target.value });
    this.clearValidationErr("latitude");
  }

  onLongChange(e) {
    this.setState({ longitude: e.target.value });
    this.clearValidationErr("longitude");
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
      this.setState({
        success: false,
        errorMsg: 'Invalid Point'
      });
    })
  }

  render() {

    let latErr = null, longErr = null;

    for(let err of this.state.errors) {
      if(err.element === "latitude") {
        latErr = err.message;
      }
      if(err.element === "longitude") {
        longErr = err.message;
      }
    }

    return(
      <div>
        <div className="hint">
          <p><strong>Hint:</strong></p>
          <p>Latitude: 39.7456</p>
          <p>Longitude: -97.0892</p>
        </div>
        <div className="inner-container location-form">
          <form onSubmit={this.submitLocation.bind(this)}>
            <div className="input-group">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="text"
                className={"form-input " + (latErr ? "invalid" : "")}
                onChange={this.onLatChange.bind(this)}/>
            </div>
            <div className="input-group">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="text"
                className={"form-input " + (longErr ? "invalid" : "")}
                onChange={this.onLongChange.bind(this)}/>
            </div>

            <input
              type="submit"
              className="submit-button"
              value="Submit"
            />
          </form>
        </div>

        <div className="location-display">
          { this.state.success &&
          <div className="success-location">
            <h4>You are located in:</h4>
            <h3>{this.state.city}, {this.state.state}</h3>
          </div>
          }
          { this.state.success === false &&
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
