import React, { Component } from 'react';

export default class MyMenu extends Component {

    constructor(props) {
        super(props);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(e) {
        var value = e.target.id;
        console.log(e.target.id);
        e.preventDefault();
        this.props.updateFilter(value);
    }

    render() {
        var content = '';
        if( this.props.items.length > 0 ) {
            var items = this.props.items.map( (item) => {
                return <li key={item}><button id={item} onClick={this.handleFilterChange}>{item}</button></li>;
            });
            content = <ul>{items}</ul>;
        }
        return (
            <div className="Menu">
                <h1>Menu</h1>
                {content}
            </div>
        );
    }
};