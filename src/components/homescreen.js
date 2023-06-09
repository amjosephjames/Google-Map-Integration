import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Homescreen = () => {
  return (
    <LoadScript
      //  googleMapsApiKey="YOUR_API_KEY"
      // googleMapsApiKey="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"
      googleMapsApiKey="https://maps.googleapis.com/maps/api/js?key=INSERT_YOUR_API_KEY&callback=initMap&libraries=places&v=weekly"
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
};
export default Homescreen;
