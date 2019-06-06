import React, { Component } from 'react'

import DropPodMarker from './DropPodMarker';

export default class DropPodGroup extends Component {
    constructor(props) {
        super(props)

        console.log(this.props.markers)
    }

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