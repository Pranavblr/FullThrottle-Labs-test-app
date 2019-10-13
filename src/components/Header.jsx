import React, { Component } from 'react';

import logo from '../assets/logo.jpg'
class Header extends Component {
    render() {
        return (
            <div className="header-section">
                <div className="row">
                <div className="col-md-3 col-3 col-sm-3 col-lg-3">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="col-md-3 col-3 col-sm-3 col-lg-3">
                    <p>Loan Calculator</p>
                </div>
                </div>
            </div>
        );
    }
}

export default Header;