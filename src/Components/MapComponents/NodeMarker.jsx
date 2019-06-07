import React, { Component } from 'react'

import { Marker, Popup } from 'react-leaflet';
import * as L from 'leaflet';

import generateIconColors from '../../utils/colors';

const colors = {
    iron: generateIconColors("#CCCCCC"),
    copper: generateIconColors("#E65C2E"),
    limestone: generateIconColors("#FFE7B3"),
    coal: {
        dark: "#000",
        main: "#666",
        mid: "#333",
        outline: "#CCC"
    },
    oil: generateIconColors("#660000"),
    caterium: generateIconColors("#FFCC00"),
    bauxite: generateIconColors("#578000"),
    sulfur: generateIconColors("#DF896B"),
    quartz: generateIconColors("#FF6699"),
    uranium: generateIconColors("#6FEA64"),
    sam: generateIconColors("#A424B3"),
    geyser: generateIconColors("#07C8FF"),
    unknown: generateIconColors("#000"),
}

export default class DropPodMarker extends Component {

    createMarkerIcon(marker, iconSize) {
        const width = 52 * iconSize;
        const height = 82 * iconSize;

        let html = '';
        switch (marker.purity) {
            case 'impure': html = impureSvg(marker.type); break;
            case 'normal': html = normalSvg(marker.type); break;
            case 'pure': html = pureSvg(marker.type); break;
        }

        return L.divIcon({
            iconSize: [width, height],
            iconAnchor: [width / 2, height],
            popupAnchor: [0, height / -2],
            html: html,
            className: `node_marker node_${marker.type} node_${marker.purity}`
        });
    }

    nodePureSvg(type) {
        const { main, mid, dark, outline } = colors[type];

        return `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 73">
            <path fill="${main}" d="M33.5 12.3l-4.3 10-2-4.6 6.3-5.4z"/>
            <path fill="${dark}" d="M16.8 17.7l-2 4.5-4.2-10 6.2 5.5z"/>
            <path fill="${mid}" d="M33.5 35.5L22 42l-11.4-6.6 2.8-1.7 8.6 5 8.6-5 2.9 1.7z"/>
            <path fill="${dark}" d="M33.5 35.5v3.3L22 45.4V42l11.5-6.6z"/>
            <path fill="${main}" d="M22 42v3.4l-11.4-6.6v-3.3L22 42z"/>
            <path fill="${outline}" d="M35.7 21V7.3L28 14 22 0l-6 14-7.6-6.7V21L0 18l8.3 14.5v.6l.8.5-.7.4v5.8L21 47.1v22.2a2 2 0 1 0 2 0V47.2l12.7-7.3V34l-.7-.4.7-.4v-.7L44 18.1zm-1 11l-.1.3v.3h-.2l-1.6 1 1.6 1h.2v4.6L22 46.5 9.5 39.2v-4.5l.1-.1 1.5-.9-1.4-1-.3-.2v-.3l-.1-.2-6.9-12L8 22l1.4.5V9.7l5.9 5 1 1 .7-1.3 5-11.7 5 11.7.6 1.3 1.1-1 5.8-5v12.8L36 22l5.6-2z"/>
            <path fill="${dark}" d="M39.2 22.2l-5.7 10-2.9 1.6-8.6 5 6.5-6.2L30 31l.5-.5.5-.4 1-1 1.4-1.4 5.7-5.5zM13.6 25.2L11.9 29l-1.3-1.3-5.8-5.5 5.8 2 3 1zM33.5 12.3v12l-3 1-3 1-.6.2-2 .7-2.9 1V5.7l5.2 12 2 4.5 4.3-10z"/>
            <path fill="${main}" d="M39.2 22.2l-5.7 5.5L32 29l-1 1-.5.5-.5.5-1.6 1.6-6.5 6.2-8.6-5-2.8-1.6-5.8-10 5.8 5.5 1.3 1.3 1.7-3.8-3-1v-12l4.3 10 2-4.5 5.1-12v22.5l2.9-1 2-.7.5-.2 3-1 3-1 5.8-2z"/>
          </svg>
        `;
    }

    nodeNormalSvg(type) {
        const { main, mid, dark, outline } = colors[type];

        return `
        <svg viewBox="0 0 44 73" xmlns="http://www.w3.org/2000/svg">
            <path fill="${dark}" d="M33.3 35.4v3.3l-11.4 6.6V42z"/>
            <path fill="${main}" d="M21.9 42v3.3l-11.4-6.6v-3.3zM21.9 38.7V12.3L10.5 32.1z"/>
            <path fill="${dark}" d="M21.9 12.3l11.4 19.8-11.4 6.6z"/>
            <path fill="${mid}" d="M21.9 38.7l-8.6-5-2.8 1.7L21.9 42l11.4-6.6-2.9-1.6z"/>
            <path d="M36.3 33L21.9 8 7.5 33l1.5.8-.7.4V40l12.5 7.3v22a2 2 0 1 0 2-.1v-22L35.5 40v-5.8l-.7-.4 1.5-.9zm-2 1.7v4.6L22 46.6 9.4 39.3v-4.5h.1l1.6-1-1.6-1-.5-.3 12.9-22.3 12.9 22.3-.5.3-1.7 1 1.7 1z" fill="${outline}"/>
        </svg>
        `;
    }

    nodeImpureSvg(type) {
        const { main, mid, dark, outline } = colors[type];

        return `
        <svg viewBox="0 0 44 73" xmlns="http://www.w3.org/2000/svg">
            <path fill="${mid}" d="M33 35l-11.4 6.6-11.4-6.5 11.4-6.6z"/>
            <path fill="${dark}" d="M33 35v3.4l-11.4 6.5v-3.3z"/>
            <path fill="${main}" d="M21.6 41.6V45l-11.4-6.5V35z"/>
            <path d="M35.1 39.6v-5.8L21.6 26 8 33.8v5.8L20.6 47v22a2 2 0 1 0 2 0v-22L35 39.6zm-26-5.1l12.5-7.3L34 34.5V39l-12.4 7.2L9 39v-4.5z" fill="${outline}"/>
        </svg>
        `;
    }

    render() {
        const marker = this.props.marker;
        return (
            <Marker
                position={[marker.y, marker.x]}
                icon={this.createMarkerIcon(marker, 1)}
            >
                <Popup>
                    <p style={{ textAlign: "center" }}>
                        <b>{marker.purity} {marker.type}</b>
                    </p>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                        <li>X: {marker.x}</li>
                        <li>Y: {marker.y}</li>
                        <li>Z: {marker.z}</li>
                    </ul>
                    <p style={{ textAlign: "center" }}>
                        <b>Informations</b>
                    </p>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                        <li>ID: {marker.originId}</li>
                        <li>Obstructed: {marker.obstructed ? "true" : "false"}</li>
                    </ul>
                </Popup>
            </Marker>
        );
    }
}