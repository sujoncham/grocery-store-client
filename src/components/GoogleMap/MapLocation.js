import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 23.785948,
  lng: 90.4247586,
};

const MapLocation = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCl3JIOVyMGlcWn7aPcxQdVfS8uJbB3pAA">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default MapLocation;
