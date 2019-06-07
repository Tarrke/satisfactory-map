import React, { Component } from 'react'

import NodeMarker from './NodeMarker';

export default class NodeGroup extends Component {

    render() {
        return(
            <div>
              {this.props.markers.map( (marker) => 
            <NodeMarker key={marker.originId} marker={marker}/>
        )}
            </div>
        );
    }
}