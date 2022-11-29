import React from 'react'
import {Map, GoogleApiWrapper} from 'google-map-react'

function MapLocation() {
  return (
    <Map
      google = {this.props.google}
      style={{width:"100", height:"100"}}
      zoom={10}
      intialCenter={{
        lat: -1.2972432500000002,
        lng: 36.785859480261195

      }}
    
    />
  )
}

export default MapLocation