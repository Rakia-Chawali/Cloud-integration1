import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 37.7749,
      lng: -122.4194,
    },
    zoom: 11,
  };

  render() {
    return (
      <div style={{ height: "500px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB8CU6W-ONdl9lYx_A1GTkJDMX_scK3SFg" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={37.7749} lng={-122.4194} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

const Marker = ({ text }) => <div>{text}</div>;

export default Map;
