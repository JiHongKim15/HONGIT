
import logo from './hongit_logo.png';
import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {
    render() {
        return (
            <div >
                <img src={logo} className="logo" alt="logo" onClick ={()=>{console.log("logoClick!")}}/>
            </div>
        );
    }
}

export default Logo;