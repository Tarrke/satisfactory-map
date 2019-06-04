import React, { Component } from 'react'

import MyMenu from './MyMenu';
import MyMap from './MyMap';

export default class MapContainer extends Component {

    constructor() {
        super();
        this.state = {
            listItems: '',
            activeFilter: '',
        }
        this.updateFilter = this.updateFilter.bind(this);
    }

    componentWillMount() {
        this.setState(this.getInitialState());
    }

    getInitialState() {
        return {
            listItems: ['iron_1', 'iron_2', 'iron_3'],
            activeFilter: ['iron_1']
        }
    }

    updateFilter(value) {
        var currentFilter = this.state.activeFilter;
        var index = currentFilter.indexOf(value);
        if( index !== -1 ) {
            currentFilter = currentFilter.filter( (item) => {
                return item !== value;
            })
        } else {
            currentFilter.push(value);
        }
        this.setState({ activeFilter: currentFilter });
    }

    render() {
        var displayedItems = this.state.listItems.filter(function (item) {
            var match = this.state.activeFilter.indexOf(item);
            return (match !== -1);
        }.bind(this));
        return (
            <div className="container">
                <MyMenu items={this.state.listItems} updateFilter={this.updateFilter}/>
                <MyMap items={displayedItems}/>
            </div>
        );
    }
}