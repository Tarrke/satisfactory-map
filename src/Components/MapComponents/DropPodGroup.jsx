import React, { Component } from 'react'

import DropPodMarker from './DropPodMarker';

export default class DropPodGroup extends Component {

    render() {
        return(
            <div>
              {this.props.markers.map( (marker) => 
            <DropPodMarker key={marker.originId} marker={marker}/>
        )}
            </div>
        );
    }
}