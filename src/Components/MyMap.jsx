import React, {Component} from 'react';
import logo from '../logo.svg';

export default class MyMap extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var content = "Default";
        if( this.props.items.length > 0 ) {
            var items = this.props.items.map( (item) => {
                return <li>{item}</li>;
            });
            content = <ul>{items}</ul>;
        }
        return (
            <div className="Map">
                <img src={logo} className="App-logo" alt="logo" />
                {content}
            </div>
        );
    }
}