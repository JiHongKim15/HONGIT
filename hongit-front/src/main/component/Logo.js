
import logo from './hongit_logo.png';
import React, { Component } from 'react';

class Logo extends Component {
    logoClick = () => {
        console.log('clicked');
    }

    render() {
        return (
            <div >
                <img src={logo} className="Main-logo" alt="logo" onClick = {this.logoClick}/>
            </div>
        );
    }
}

export default Logo;