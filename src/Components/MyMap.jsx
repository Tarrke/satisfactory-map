import React, { Component } from 'react';

import { Map, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet'

export default class MyMap extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        var content = "Default";
        if (this.props.items.length > 0) {
            var items = this.props.items.map((item) => {
                return <li>{item}</li>;
            });
            content = <ul>{items}</ul>;
        }
        let position = [50, 50];
        return (
            <div className="Map">
                <Map center={position}>
                    <ZoomControl position="topright" />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </Map>
                {content}
            </div>
        );
    }
}