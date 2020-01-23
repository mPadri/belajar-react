import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import * as parkDate from './data/skateboard-parks.json'

function App() {

  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10
  })

  const [selectedPark, setSelectedPark] = useState(null)

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/padri/ck38rqjq407mg1cn1iuik1lhk"
        onViewportChange={(viewport) => {
          setViewport(viewport)
        }} >

        {parkDate.features.map((park) => (
          <Marker key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]} >
            <button className="marker-btn" onClick={(e) => {
              e.preventDefault()
              setSelectedPark(park)
            }}>
              <img src="/skateboarding.svg" alt="skate" />
            </button>
          </Marker>
        ))}

        {/* ------------------------------------------------------------- */}

        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null)
            }}>
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

export default App;
