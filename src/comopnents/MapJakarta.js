import React from 'react'
import ReactMapGL,{Marker,Popup} from 'react-map-gl'
import axios from 'axios'
import LogoMaker from '../assets/hospital.svg'


class MapJakarta extends React.Component{
    state={
        viewport: {
            latitude: -6.21462,
            longitude: 106.84513,
            width: "100vw",
            height: "100vh",
            zoom: 10  
        },
        data:[],
        selectedHospital: null
    }

    makeRequest= async ()=>{
        const config = {
            method: 'get',
            url: 'http://cors-anywhere.herokuapp.com/http://api.jakarta.go.id/v1/puskesmas',
            headers:{
                Authorization: 'B7EXSnGHwSQPrP+TOrReo7g1aR/4+qbC0S6YL5uKbv0W7UUrxEFbZpXMm/yK+de5'
            }
        }

        await axios(config).then(res=>{
            // console.log(res.data.data)
            const newData = res.data.data

            this.setState({
                data: newData
            })
        })
        
    }

    handleOnClosePopup = () => {
        this.setState({
            selectedHospital: null
        })
    }

    handleDetail=()=>{
        alert("hallo")
    }

    componentDidMount(){
        this.makeRequest()
    }

    render(){
        console.log(this.state.data)
        return(
            <div>
                <ReactMapGL 
                    {...this.state.viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/padri/ck38rqjq407mg1cn1iuik1lhk"
                    onViewportChange={(viewport)=>{
                        this.setState({
                            viewport:viewport
                        })
                    }}>

                    {
                        this.state.data.map(data=>{
                            return(
                                <Marker 
                                 key={data.id}
                                 latitude={data.location.latitude}
                                 longitude={data.location.longitude}>
                                    <button className="marker-btn" onClick={(e)=>{
                                        e.preventDefault()
                                        this.setState({
                                            selectedHospital: data
                                        })
                                    }} >
                                        <img src={LogoMaker} alt="hospital" />
                                    </button>
                                </Marker>
                            )
                        })
                    }

                    {
                        // console.log(this.state.selectedHospital)
                        this.state.selectedHospital ?
                        <Popup 
                            latitude={this.state.selectedHospital.location.latitude} 
                            longitude={this.state.selectedHospital.location.longitude}
                            onClose={this.handleOnClosePopup}> 
                            <div>
                                <h4>{this.state.selectedHospital.nama_Puskesmas}</h4>
                                <p>Kepala Puskesmas : {this.state.selectedHospital.kepala_puskesmas}</p>
                                <p>Telepon : +6221 {this.state.selectedHospital.telepon[0]}</p>
                                <p>Email : {this.state.selectedHospital.email}</p>
                                <button onClick={this.handleDetail}>View Detail</button>
                            </div>
                        </Popup> : null
                    }

                </ReactMapGL>
            </div>
        )
    }
}

export default MapJakarta