import React, { Component } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import * as parkData from '../data/skateboard-parks.json'

class Maps extends Component {

    constructor(props) {
        super(props)
        this.state = {
            viewport: {
                latitude: 45.4211,
                longitude: -75.6903,
                width: "100vw",
                height: "100vh",
                zoom: 10
            },
            selectedPark: null
        }
    }

    handleOnClosePopup = () => {
        this.setState({
            selectedPark: null
        })
    }
    render() {
        return (
            <div>
                <ReactMapGL
                    {...this.state.viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/padri/ck38rqjq407mg1cn1iuik1lhk"
                    onViewportChange={(viewport)=>{
                        this.setState({
                            viewport:viewport
                        })
                    }} >

                    {
                        // console.log(parkData.features)
                        parkData.features.map(park => {
                            return (
                                <Marker
                                    key={park.properties.PARK_ID}
                                    latitude={park.geometry.coordinates[1]}
                                    longitude={park.geometry.coordinates[0]}>
                                    <button className="marker-btn" onClick={
                                        (e) => {
                                            e.preventDefault()
                                            this.setState({
                                                selectedPark: park
                                            })
                                        }
                                    } >
                                        <img src="../skateboarding.svg" alt="skateboard" />
                                    </button>
                                </Marker>
                            )
                        })
                    }

                    {

                        this.state.selectedPark ? (
                            <Popup
                                latitude={this.state.selectedPark.geometry.coordinates[1]}
                                longitude={this.state.selectedPark.geometry.coordinates[0]}
                                onClose={this.handleOnClosePopup}>
                                <div>
                                    <h2>{this.state.selectedPark.properties.NAME}</h2>
                                    <p>{this.state.selectedPark.properties.DESCRIPTIO}</p>
                                </div>
                            </Popup>
                        ) : null
                    }

                </ReactMapGL>
            </div>
        )
    }
}

export default Maps