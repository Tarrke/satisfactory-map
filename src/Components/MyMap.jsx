import React, { Component } from 'react';

import { Map, TileLayer } from 'react-leaflet';
import * as L from 'leaflet';

import dDropPods from '../data/d_droppod'
import dNodes from '../data/d_nodes'

import DropPodGroup from './MapComponents/DropPodGroup';

export default class MyMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: 3,
        };

        this.bounds = [[-406400, -406400], [508000, 508000]];

        this.handleMapClick = this.handleMapClick.bind(this);
        this.handleZoomChange = this.handleZoomChange.bind(this);
    }

    componentDidMount() {
        let mapInst = this.refs.map.leafletElement;
        console.log(mapInst.getBounds());
    }

    handleMapClick(event) {
        console.log(event.latlng);
    }

    handleZoomChange(event) {
        this.setState({ zoom: event.target._zoom });
    }

    render() {
        let position = [33.8, -102];

        const crs = L.extend({}, L.CRS.Simple, {
            transformation: new L.Transformation(0.00015625, 63.5, 0.00015625, 63.5)
        });

        return (
            <div className="Map">
                <Map ref='map'
                    center={position}
                    zoomSnap={0.5}
                    maxZoom={7}
                    minZoom={3}
                    maxBounds={this.bounds}
                    zoom={this.state.zoom}
                    onClick={this.handleMapClick}
                    onZoomEnd={this.handleZoomChange}
                    crs={crs}
                >

                    <TileLayer
                        attribution=''
                        url="./tiles/{z}/{x}/{y}.png"
                        bounds={[[-406400, -406400], [508000, 508000]]}
                        noWrap={true}
                    />
                    <DropPodGroup markers={this.props.items.drop_pods} />
                </Map>
            </div>
        );
    }
}