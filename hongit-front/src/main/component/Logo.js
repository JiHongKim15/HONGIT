
import logo from './hongit_logo.png';
import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
            <div >
                <img src={logo} className="Main-logo" alt="logo"/>
            </div>
        );
    }
}

export default Logo;