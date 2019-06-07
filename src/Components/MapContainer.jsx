import React, { Component } from 'react'

import MyMenu from './MyMenu';
import MyMap from './MyMap';

import dDropPods from '../data/d_droppod'

const data = {
    'drop_pods': dDropPods,
}

export default class MapContainer extends Component {

    constructor() {
        super();
        this.state = this.getInitialState();

        this.updateFilter = this.updateFilter.bind(this);
        this.getInitialState = this.getInitialState.bind(this);
    }

    getInitialState() {
        return {
            listItems: ['iron_1', 'iron_2', 'iron_3', 'drop_pods'],
            activeFilter: ['drop_pods'],
            activeItems: {
                drop_pods: dDropPods,
            },
        }
    }

    updateFilter(value) {
        var active = this.state.activeItems;
        var currentFilter = this.state.activeFilter;
        if (value) {
            console.log("Update Filter")
            var index = currentFilter.indexOf(value);
            if (index !== -1) {
                currentFilter = currentFilter.filter((item) => {
                    return item !== value;
                })
                active[value] = [];
            } else {
                active[value] = data[value];
                currentFilter.push(value);
            }
        }
        this.setState({ activeItems: active });
        this.setState({ activeFilter: currentFilter });
    }

    render() {
        /*
        var displayedItems = this.state.listItems.filter(function (item) {
            var match = this.state.activeFilter.indexOf(item);
            return (match !== -1);
        }.bind(this));*/
        return (
            <div className="container">
                <MyMenu items={this.state.listItems} updateFilter={this.updateFilter} />
                <MyMap items={this.state.activeItems} />
            </div>
        );
    }
}