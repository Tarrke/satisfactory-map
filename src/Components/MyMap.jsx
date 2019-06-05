import React, { Component } from 'react';

import { Map, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet'

import * as DropPods from '../data/d_droppod'

export default class MyMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: 5,
        };
        const bounds= [[19,17],[-19,-17]]
    }

    componentDidMount() {
        let mapInst = this.refs.map.leafletElement;
        console.log( mapInst.getBounds() );
    }

    render() {
        var content = "Default";
        if (this.props.items.length > 0) {
            var items = this.props.items.map((item) => {
                return <li key={item}>{item}</li>;
            });
            content = <ul>{items}</ul>;
        }
        let position = [0, 0];
        return (
            <div className="Map">
                <Map ref='map'
                    center={position}
                    zoomSnap={0.5}
                    maxZoom={7}
                    minZoom={3}
                    maxBounds={[[-406400, -406400], [508000, 508000]]}
                    zoom={this.state.zoom}
                >
                    
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="/tiles/{z}/{x}/{y}.png"
                        bounds={this.bounds}
                        noWrap={true}
                    />
                    
                </Map>
                {content}
            </div>
        );
    }
}